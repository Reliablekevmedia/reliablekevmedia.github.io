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
    summary: 'One short video, filmed and edited for you. The simplest way to begin.',
    includes: ['One short vertical video (up to 60 seconds)', 'Filmed at your location', 'Edited with music, ready for Instagram, TikTok and Reels'],
    short: 'one short vertical video, filmed, edited and ready to publish',
  },
  {
    tier: 'Better',
    name: 'Half day event',
    price: '$500',
    from: true,
    time: 'Up to 4 hours on site',
    summary: 'Coverage of your event, including the venue, the guests and the key moments.',
    includes: ['Filming at one location', CLIPS('Five')],
    short: 'five short vertical clips',
  },
  {
    tier: 'Best',
    name: 'Full day event',
    price: '$1,100',
    from: true,
    time: 'Up to 8 hours on site',
    summary: 'Full-day coverage of your event, from setup to the final moments.',
    includes: ['Filming at one location', 'One highlight video (2–3 minutes) for YouTube, Facebook or your website', CLIPS('Six')],
    short: 'a 2–3 minute highlight video and six short vertical clips',
  },
];

// How an event day goes. Most clients don't have a set schedule, so this is the general outline we cover by default.
export const EVENT_DAY = {
  intro:
    'A detailed schedule is not required; many clients do not have one in advance. Please share your start and end times and any moments that must be captured, and we will cover the day in the following order:',
  steps: [
    { step: 'Setup', text: 'The venue, the setup and the details before guests arrive.' },
    { step: 'Arrivals', text: 'Guests arriving, greetings and the atmosphere building.' },
    { step: 'Key moments', text: 'Speeches, ribbon cuttings, performances and any moments you identify, as they happen.' },
    { step: 'Closing', text: 'The final moments and the venue as the event concludes.' },
  ],
};

// Everything that isn't a package.
export const CUSTOM_QUOTE = {
  title: 'Everything else',
  text: 'Brand films, sit-down interviews with owners, podcasts and Q&As, monthly content, and productions involving multiple locations or days. Each project is planned with you and priced individually.',
};

export const ADD_ONS = [
  { name: 'Drone footage', price: '$300', from: true, note: 'Aerial footage of your venue or event, available with a half-day or full-day package.' },
];

export const RATE_INCLUDES = [
  'Professional cameras, lenses, lighting and microphones',
  'Licensed music in every edit',
  'Captions on short vertical clips',
  'One round of revisions',
  'Delivery within 2–3 weeks',
];

export const NOT_INCLUDED = [
  'Scripts, storyboards or multi-day productions',
  'Sit-down interviews or Q&As (available by custom quote)',
  'Voiceover or motion graphics',
  'Raw footage (available as an add-on)',
  'Additional locations, or more videos than listed',
  'Additional revision rounds or time beyond the booked hours',
];

export const RATE_TERMS = [
  'Prices shown are starting rates. You will receive a detailed quote before any filming begins.',
  'Any work beyond the listed scope is quoted before it begins.',
  'Rush delivery is not available.',
];

// New-client offer, shown on the homepage, pricing, FAQ, phone scroll and intake form.
// Set `on: false` to switch it off everywhere at once.
export const FIRST_VIDEO_FREE = {
  on: true,
  headline: 'Your first video is free',
  short: 'New clients: your first video is free.',
  // TODO (Kev): confirm the terms.
  terms: 'One short vertical video (up to 60 seconds) for a new client, filmed at your business in North Jersey and edited with music and captions, ready to publish. Limited to one per business.',
};
