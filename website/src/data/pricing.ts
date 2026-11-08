// Pricing (all-in: filming plus edited video). Shown on the Services page, in the FAQ and in the phone scroll.
export const EDITS = {
  long: 'One long-form video (up to 10 minutes) for YouTube',
  clips: 'Three short clips (30–60 seconds, vertical) for Instagram, TikTok and Reels',
};

// Good / Better / Best packages. `from: true` shows the price as a starting point ("from $500"): every
// project still gets a clear quote after a free planning call.
export interface Package {
  tier: 'Good' | 'Better' | 'Best';
  name: string;
  price: string;
  from: boolean;
  time: string;
  summary: string;
  includes: string[];
  choice?: string[]; // the client picks one
}

export const PACKAGES: Package[] = [
  {
    tier: 'Good',
    name: 'Single video',
    price: '$150',
    from: false,
    time: 'About an hour on site', // TODO (Kev): confirm what the $150 single video covers
    summary: 'One short video, filmed and edited for you. The easiest way to get started.',
    includes: ['One short vertical video (up to 60 seconds)', 'Filmed at your location', 'Edited with music, ready for Instagram, TikTok and Reels'],
  },
  {
    tier: 'Better',
    name: 'Half day',
    price: '$500',
    from: true,
    time: 'Up to 4 hours on site',
    summary: 'We come out and capture what is happening: your event, your property, your space, your work.',
    includes: ['Filming at one location'],
    choice: [EDITS.long, EDITS.clips],
  },
  {
    tier: 'Best',
    name: 'Full day story',
    price: '$1,100',
    from: true,
    time: 'Up to 8 hours on site',
    summary: 'A little planning up front, then we film your business and sit down with you to tell your story.',
    includes: ['A short planning call before the shoot', 'Filming your business at one location', 'A sit-down Q&A with the owner', EDITS.long, EDITS.clips],
  },
];

export const ADD_ONS = [
  { name: 'Drone footage', price: '$300', from: true, note: 'Aerial footage of your property, building or event, added to a half or full day.' },
];

export const RATE_INCLUDES = [
  'Professional cameras, lenses, lighting and mics',
  'Licensed music in every edit',
  'One round of revisions',
  'Raw footage available on request',
  'Delivery in 2–3 weeks',
];

export const NOT_INCLUDED = [
  'Scripts, storyboards or multi-day shoots',
  'Voiceover, captions or motion graphics',
  'More than one location, or more videos than listed',
  'Extra revision rounds or time beyond your booked hours',
];

export const RATE_TERMS = [
  'Prices shown are where projects start. After a free planning call you get a clear quote before anything is filmed.',
  'Anything beyond what is listed is quoted before work begins.',
  'Rush delivery is not offered.',
];
