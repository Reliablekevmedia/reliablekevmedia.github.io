(function () {
  'use strict';

  var MENU = window.MENU || [];
  var SHOP = window.SHOP || {};
  var STORE_KEY = 'twins-bagels-order';
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function $(sel, el) { return (el || document).querySelector(sel); }
  function $$(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function slug(s) {
    return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function money(cents) { return '$' + (cents / 100).toFixed(2); }

  // ---- Index menu items -------------------------------------------------
  var ITEMS = {};
  MENU.forEach(function (cat) {
    cat.items.forEach(function (it) {
      it.id = cat.id + '--' + slug(it.name);
      it.cents = typeof it.price === 'number' ? Math.round(it.price * 100) : null;
      ITEMS[it.id] = it;
    });
  });

  if (new URLSearchParams(location.search).has('review')) {
    document.documentElement.classList.add('review');
  }

  // ---- Time helpers (shop time, not the visitor's) ----------------------
  function shopNow() {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: SHOP.timeZone || 'America/New_York',
      weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
    }).formatToParts(new Date());
    function get(t) { var p = parts.find(function (x) { return x.type === t; }); return p ? p.value : '0'; }
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    return { day: day < 0 ? new Date().getDay() : day, mins: (+get('hour') % 24) * 60 + +get('minute') };
  }
  function clock(mins, short) {
    var h = Math.floor(mins / 60), m = mins % 60;
    var ap = h >= 12 && h < 24 ? 'PM' : 'AM';
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return short && m === 0 ? h12 + ' ' + ap : h12 + ':' + String(m).padStart(2, '0') + ' ' + ap;
  }

  function renderStatus() {
    var el = $('[data-status]');
    if (!el) return;
    var now = shopNow();
    var hrs = SHOP.hours[now.day];
    var open = hrs[0] * 60, close = hrs[1] * 60;
    var text, isOpen = false;
    if (now.mins >= open && now.mins < close) {
      isOpen = true;
      text = 'Open now · until ' + clock(close, true);
    } else if (now.mins < open) {
      text = 'Closed now · opens today at ' + clock(open, true);
    } else {
      var next = SHOP.hours[(now.day + 1) % 7];
      text = 'Closed now · opens tomorrow at ' + clock(next[0] * 60, true);
    }
    el.classList.toggle('is-open', isOpen);
    $('[data-status-text]', el).textContent = text;
  }

  function renderHours() {
    var body = $('[data-hours] tbody');
    if (!body) return;
    var today = shopNow().day;
    var order = [1, 2, 3, 4, 5, 6, 0];
    body.innerHTML = order.map(function (d) {
      var h = SHOP.hours[d];
      return '<tr' + (d === today ? ' class="today"' : '') + '><td>' + DAYS[d] + (d === today ? ' (today)' : '') +
        '</td><td>' + clock(h[0] * 60, true) + ' – ' + clock(h[1] * 60, true) + '</td></tr>';
    }).join('');
  }

  function pickupSlots() {
    var now = shopNow();
    var out = [];
    var h = SHOP.hours[now.day];
    var open = h[0] * 60, close = h[1] * 60;
    if (now.mins >= open && now.mins < close - 15) out.push({ v: 'asap', l: 'ASAP (about 15 min)' });
    var start = Math.ceil(Math.max(now.mins + 30, open) / 15) * 15;
    for (var t = start; t <= close - 15; t += 15) out.push({ v: 'today-' + t, l: 'Today, ' + clock(t) });
    if (out.length < 6) {
      var n = SHOP.hours[(now.day + 1) % 7];
      for (var u = n[0] * 60; u <= Math.min(n[1] * 60 - 15, n[0] * 60 + 240); u += 15) {
        out.push({ v: 'tomorrow-' + u, l: 'Tomorrow, ' + clock(u) });
      }
    }
    return out;
  }

  function renderSlots() {
    var sel = $('[data-slots]');
    if (!sel) return;
    var keep = sel.value;
    sel.innerHTML = pickupSlots().map(function (s) {
      return '<option value="' + s.v + '">' + esc(s.l) + '</option>';
    }).join('');
    if (keep && $('option[value="' + keep + '"]', sel)) sel.value = keep;
  }

  // ---- Menu -------------------------------------------------------------
  function itemHTML(it) {
    var price = it.cents != null
      ? '<span class="item-price">' + money(it.cents) + '</span>'
      : '<span class="item-price ask">In store</span>';
    var btn = it.cents != null
      ? '<button class="add" type="button" data-add-id="' + it.id + '" aria-label="Add ' + esc(it.name) + '">+</button>'
      : '<span class="add-spacer" aria-hidden="true"></span>';
    return '<li class="item' + (it.check ? ' check' : '') + '"><div><span class="item-name">' + esc(it.name) + '</span>' +
      (it.desc ? '<span class="item-desc">' + esc(it.desc) + '</span>' : '') + '</div>' + price + btn + '</li>';
  }

  function renderMenu() {
    var menuEl = $('[data-menu]');
    var chipsEl = $('[data-chips]');
    if (!menuEl) return;
    var html = '<p class="review-note"><strong>Review mode.</strong> Highlighted items were hard to read on the printed menu. Confirm the price and description with the shop.</p>';
    var chips = '';
    var lastGroup = null;
    MENU.forEach(function (cat) {
      if (cat.group !== lastGroup) {
        html += '<h3 class="group-title">' + esc(cat.group) + '</h3>';
        chips += '<span class="chip-group">' + esc(cat.group) + '</span>';
        lastGroup = cat.group;
      }
      chips += '<a class="chip" href="#' + cat.id + '" data-chip="' + cat.id + '">' + esc(cat.name) + '</a>';
      html += '<section class="cat" id="' + cat.id + '" aria-labelledby="' + cat.id + '-h">' +
        '<div class="cat-head"><h4 id="' + cat.id + '-h">' + esc(cat.name) + '</h4>' +
        (cat.note ? '<p>' + esc(cat.note) + '</p>' : '') + '</div>' +
        '<ul class="items">' + cat.items.map(itemHTML).join('') + '</ul></section>';
    });
    menuEl.innerHTML = html;
    chipsEl.innerHTML = chips;
  }

  function watchChips() {
    if (!('IntersectionObserver' in window)) return;
    var row = $('[data-chips]');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$('.chip', row).forEach(function (c) { c.classList.toggle('is-active', c.dataset.chip === e.target.id); });
        var chip = $('.chip[data-chip="' + e.target.id + '"]', row);
        if (chip) row.scrollTo({ left: chip.offsetLeft - 24, behavior: 'smooth' });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    $$('.cat').forEach(function (s) { io.observe(s); });
  }

  // ---- Order bag --------------------------------------------------------
  var bag = load();

  function load() {
    try {
      var v = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      return Array.isArray(v) ? v.filter(function (l) { return ITEMS[l.id] && ITEMS[l.id].cents != null && l.qty > 0; }) : [];
    } catch (e) { return []; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(bag)); } catch (e) { /* private mode: fine */ }
  }
  function line(id) { return bag.find(function (l) { return l.id === id; }); }
  function count() { return bag.reduce(function (n, l) { return n + l.qty; }, 0); }
  function subtotal() { return bag.reduce(function (n, l) { return n + ITEMS[l.id].cents * l.qty; }, 0); }

  function add(id) {
    var it = ITEMS[id];
    if (!it || it.cents == null) return;
    var l = line(id);
    if (l) l.qty += 1; else bag.push({ id: id, qty: 1, note: '' });
    save();
    update(true);
    toast('Added ' + it.name);
  }
  function setQty(id, q) {
    var l = line(id);
    if (!l) return;
    if (q <= 0) bag = bag.filter(function (x) { return x.id !== id; });
    else l.qty = q;
    save();
    update(true);
  }

  function renderLines() {
    var ul = $('[data-lines]');
    ul.innerHTML = bag.map(function (l) {
      var it = ITEMS[l.id];
      return '<li class="line">' +
        '<div><div class="line-name">' + esc(it.name) + '</div><div class="muted small">' + money(it.cents) + ' each</div></div>' +
        '<span class="line-price">' + money(it.cents * l.qty) + '</span>' +
        '<div class="qty" role="group" aria-label="Quantity of ' + esc(it.name) + '">' +
          '<button type="button" data-dec="' + l.id + '" aria-label="Remove one">−</button>' +
          '<span>' + l.qty + '</span>' +
          '<button type="button" data-inc="' + l.id + '" aria-label="Add one">+</button>' +
        '</div><span></span>' +
        '<label class="line-note"><span class="sr-only">Note for ' + esc(it.name) + '</span>' +
          '<input data-note="' + l.id + '" value="' + esc(l.note) + '" maxlength="140" placeholder="Note: bagel type, toasted, extras…"></label>' +
        '</li>';
    }).join('');
  }

  function update(withLines) {
    var n = count(), total = subtotal();
    var badge = $('[data-bag-count]');
    badge.textContent = n;
    badge.hidden = n === 0;
    var bar = $('[data-order-bar]');
    bar.hidden = n === 0 || !$('[data-drawer]').hidden;
    $('[data-bar-count]').textContent = n + (n === 1 ? ' item' : ' items');
    $('[data-bar-total]').textContent = money(total);
    $('[data-subtotal]').textContent = money(total);
    $('[data-empty]').hidden = n > 0;
    $('[data-pickup-form]').hidden = n === 0;
    $('[data-checkout]').disabled = n === 0;
    $$('.add[data-add-id]').forEach(function (b) {
      var l = line(b.dataset.addId);
      var it = ITEMS[b.dataset.addId];
      b.classList.toggle('in-bag', !!l);
      b.textContent = l ? String(l.qty) : '+';
      b.setAttribute('aria-label', l ? 'Add another ' + it.name + ' (' + l.qty + ' in your order)' : 'Add ' + it.name);
    });
    if (withLines) renderLines();
  }

  // ---- Drawer -----------------------------------------------------------
  var lastFocus = null;
  function step(name) {
    $$('[data-step]').forEach(function (s) { s.hidden = s.dataset.step !== name; });
    $('[data-foot]').hidden = name !== 'bag';
  }
  function openBag() {
    lastFocus = document.activeElement;
    renderSlots();
    renderLines();
    $('[data-toast]').hidden = true;
    $('[data-scrim]').hidden = false;
    $('[data-drawer]').hidden = false;
    $('[data-order-bar]').hidden = true;
    document.body.style.overflow = 'hidden';
    $('[data-close-bag]').focus();
  }
  function closeBag() {
    $('[data-scrim]').hidden = true;
    $('[data-drawer]').hidden = true;
    document.body.style.overflow = '';
    if ($('[data-step="done"]').hidden === false) step('bag');
    update(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function checkout() {
    var form = $('[data-pickup-form]');
    var name = form.elements.name, phone = form.elements.phone, time = form.elements.time;
    var err = $('[data-form-error]');
    var digits = phone.value.replace(/\D/g, '');
    var problems = [];
    name.setAttribute('aria-invalid', String(!name.value.trim()));
    phone.setAttribute('aria-invalid', String(digits.length < 10));
    if (!name.value.trim()) problems.push('your name');
    if (digits.length < 10) problems.push('a phone number');
    if (problems.length) {
      err.textContent = 'Please add ' + problems.join(' and ') + ' so we know whose order it is.';
      err.hidden = false;
      (name.value.trim() ? phone : name).focus();
      return;
    }
    err.hidden = true;
    var when = time.options[time.selectedIndex] ? time.options[time.selectedIndex].text : 'soon';
    var n = count();
    $('[data-done-summary]').textContent = name.value.trim() + ', your ' + n + (n === 1 ? ' item' : ' items') +
      ' (' + money(subtotal()) + ' before tax) will be ready for pickup ' +
      (when.indexOf('ASAP') === 0 ? 'in about 15 minutes' : when.replace(/^(Today|Tomorrow), /, function (m, d) { return d.toLowerCase() + ' at '; })) +
      ' at 321 North 8th St.';
    bag = [];
    save();
    update(true);
    step('done');
    $('[data-new-order]').focus();
  }

  // ---- Toast ------------------------------------------------------------
  var toastTimer = null;
  function toast(msg) {
    var t = $('[data-toast]');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 1600);
  }

  // ---- Events -----------------------------------------------------------
  document.addEventListener('click', function (e) {
    var t = e.target;
    var addBtn = t.closest('[data-add-id]');
    if (addBtn) { add(addBtn.dataset.addId); return; }
    if (t.closest('[data-open-bag]')) { openBag(); return; }
    if (t.closest('[data-close-bag]') || t.closest('[data-scrim]')) { closeBag(); return; }
    var inc = t.closest('[data-inc]');
    if (inc) { setQty(inc.dataset.inc, line(inc.dataset.inc).qty + 1); return; }
    var dec = t.closest('[data-dec]');
    if (dec) { setQty(dec.dataset.dec, line(dec.dataset.dec).qty - 1); return; }
    if (t.closest('[data-checkout]')) { checkout(); return; }
    if (t.closest('[data-new-order]')) { step('bag'); closeBag(); return; }
  });
  document.addEventListener('input', function (e) {
    var id = e.target.dataset && e.target.dataset.note;
    if (id) { var l = line(id); if (l) { l.note = e.target.value; save(); } }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('[data-drawer]').hidden) closeBag();
  });

  // ---- Init -------------------------------------------------------------
  renderMenu();
  watchChips();
  renderStatus();
  renderHours();
  update(true);
  var y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
  setInterval(renderStatus, 60 * 1000);
})();
