# Twins Bagels Cafe: demo site

A pitch demo for Twins Bagels Cafe (321 North 8th St, Prospect Park, NJ · 973-553-1188 · Instagram `@twins_bagel_cafe_deli`).
One page: hero, hours band, seasonal specials, the full menu with pickup ordering, a dozen-bagels callout, and a visit section with hours and a map.

Plain HTML, CSS and JavaScript. No build step, so it runs on GitHub Pages or any static host as is.

## Files

- `index.html`: the page
- `menu.js`: **the menu and shop details**. Edit prices, items, hours and links here.
- `app.js`: menu rendering, order bag, pickup times and open/closed status
- `styles.css`: colors pulled from their printed menu (pink, blue, charcoal) plus the bagel tan
- `images/`: logo and food photos cropped from their Instagram. Swap in real photos when you shoot.

## Preview it

```
cd clients/twins-bagels
python3 -m http.server 8000
```

Then open http://localhost:8000. Add `?review` to the URL (http://localhost:8000/?review) to highlight every item whose price or description was hard to read on the menu photo. Bring that view to the owner.

## What's demo and what's real

- **Real:** menu, prices (except the highlighted ones), hours, address, phone, DoorDash, Uber Eats and Instagram links.
- **Demo:** "Place pickup order" shows a confirmation, but no payment is taken and nothing is sent. It says so on screen.
- `<meta name="robots" content="noindex">` keeps this demo out of Google. Remove it when the site goes live on the shop's own domain.

## Confirm with the owner

- Prices marked `check: true` in `menu.js`: the turkey bacon and pastrami breakfast sandwiches, flavored cream cheese, salami, Te-Tri salad, and the omelette and breakfast specialty descriptions
- Hot drink prices (12/16/20 oz), bakery prices, add-on prices (extra cheese, avocado, etc.)
- Wrap and panini descriptions (not readable in the photo)
- Ice cream: the menu cover says "Ice Cream" but no items are listed
- Hours: the menu says Mon–Sat 6–8 and Sun 7–8, but DoorDash lists 6:15 AM–7:20 PM
- Bagel flavors and spreads they offer, so they can become choices instead of a free-text note
- Original logo file (this one is cropped from a phone screenshot)

## Going live: connecting real ordering

Which ordering setup to use depends on their register:

| They use | Connect ordering with |
|---|---|
| Square | Square Online ordering (free plan, per-order processing fee), or Square's Orders + Payments APIs to keep this exact cart |
| Clover | Clover Online Ordering |
| Toast | Toast Online Ordering |
| No POS | DoorDash's commission-free direct ordering. Orders land on the DoorDash tablet they already have. |

Then: buy a domain (e.g. twinsbagelscafe.com), host the site (GitHub Pages, Netlify or Cloudflare Pages, all free), and point the "Place pickup order" button at real checkout.
