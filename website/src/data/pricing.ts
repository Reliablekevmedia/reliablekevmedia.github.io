// Pricing (all-in: filming plus edited video). Shown on the Services page, in the FAQ and in the phone scroll.
// Kev's direction (Nov 13, 2026): the half and full day are shoot rates for general events: no planning call and no
// sit-down Q&A built in (an event space may not want one). Anything else (brand films, a sit-down story with the
// owner, podcasts, monthly content) is a custom quote. Deliverables below confirmed by Kev.

// Good / Better / Best. `from: true` shows the price as a starting point ("from $500").
export interface Package {
  tier: 'Good' | 'Better' | 'Best';
  name: string;
  price: string;
  from: boolean;
  time: string;
  summary: string;
  includes: string[];
  /** What you get, in a few words (FAQ). */
  short: string;
}

const CLIPS = (n: string) => `${n} short vertical clips (up to 60 seconds) for Instagram, TikTok and Reels`;

export const PACKAGES: Package[] = [
  {
    tier: 'Good',
    name: 'Single video',
    price: '$150',
    from: false,
    time: 'About an hour on site', // TODO (Kev): confirm what the $150 single video covers
    summary: 'One short video, filmed and edited for you. The easiest way to get started.',
    includes: ['One short vertical video (up to 60 seconds)', 'Filmed at your location', 'Edited with music, ready for Instagram, TikTok and Reels'],
    short: 'one short vertical video, filmed and edited, ready to post',
  },
  {
    tier: 'Better',
    name: 'Half day event',
    price: '$500',
    from: true,
    time: 'Up to 4 hours on site',
    summary: 'Coverage of your event: the space, the people and the moments that matter.',
    includes: ['Filming at one location', CLIPS('Five')],
    short: 'five short vertical clips',
  },
  {
    tier: 'Best',
    name: 'Full day event',
    price: '$1,100',
    from: true,
    time: 'Up to 8 hours on site',
    summary: 'All-day coverage of your event, from setup to the last moments.',
    includes: ['Filming at one location', 'One highlight video (2–3 minutes) for YouTube, Facebook or your website', CLIPS('Six')],
    short: 'a 2–3 minute highlight video and six short vertical clips',
  },
];

// How an event day goes. Most clients don't have a set schedule, so this is the general outline we cover by default.
export const EVENT_DAY = {
  intro:
    "No set schedule? Most clients don't have one, and that's fine. Send us your start and end times and anything that can't be missed, and we cover the day in this order:",
  steps: [
    { step: 'Before doors', text: 'The setup, the space and the details, before anyone arrives.' },
    { step: 'Arrivals', text: 'Guests coming in, greetings and the crowd building.' },
    { step: 'Main moments', text: 'Speeches, ribbon cuttings, performances and anything you flag, as they happen.' },
    { step: 'Wrap-up', text: 'The last moments and the room as the event winds down.' },
  ],
};

// Everything that isn't a package.
export const CUSTOM_QUOTE = {
  title: 'Everything else',
  text: 'Brand films, a sit-down story with the owner, podcasts and Q&As, monthly content, and shoots with more than one location or day. Planned with you and priced by the project.',
};

export const ADD_ONS = [
  { name: 'Drone footage', price: '$300', from: true, note: 'Aerial footage of your venue or event, added to a half or full day.' },
];

export const RATE_INCLUDES = [
  'Professional cameras, lenses, lighting and mics',
  'Licensed music in every edit',
  'Captions on short vertical clips',
  'One round of revisions',
  'Delivery in 2–3 weeks',
];

export const NOT_INCLUDED = [
  'Scripts, storyboards or multi-day shoots',
  'Sit-down interviews or Q&As (part of a custom quote)',
  'Voiceover or motion graphics',
  'Raw footage (available as an add-on)',
  'More than one location, or more videos than listed',
  'Extra revision rounds or time beyond your booked hours',
];

export const RATE_TERMS = [
  'Prices shown are where projects start. You get a clear quote before anything is filmed.',
  'Anything beyond what is listed is quoted before work begins.',
  'Rush delivery is not offered.',
];

// New-client offer, shown on the homepage, pricing, FAQ, phone scroll and intake form.
// Set `on: false` to switch it off everywhere at once.
export const FIRST_VIDEO_FREE = {
  on: true,
  headline: 'Your first video is free',
  short: 'New clients: your first video is free.',
  // TODO (Kev): confirm the terms.
  terms: 'One short vertical video (up to 60 seconds) for a new client, filmed at your business in North Jersey and edited with music and captions, ready to post. One per business.',
};
