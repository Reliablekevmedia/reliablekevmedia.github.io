// One place for business details. Anything marked TODO still needs real info.
export const SITE = {
  name: 'Reliable Kev Media',
  tagline: 'Video content, event coverage and podcasts. Full-context storytelling for North Jersey.',
  description:
    'Reliable Kev Media is a video production company serving municipalities, local businesses and trade companies across North Jersey, producing video that builds trust by showing the work, the people and the community behind every business.',
  email: 'sixthsensestudiosllc@gmail.com',
  phone: '(973) 820-5511',
  hours: 'By appointment. We film on location.', // no storefront
  area: 'North Jersey',
  // Leave a URL empty to hide that icon.
  socials: {
    instagram: 'https://www.instagram.com/reliable_kev/',
    tiktok: '',
    youtube: '', // coming: channel under One Brick Media
    facebook: 'https://www.facebook.com/profile.php?id=61595018734943',
    linkedin: 'https://www.linkedin.com/in/kevin-moreno-649294161/'
  },
};

// Services drive the Services dropdown, the homepage slider and service grid,
// and the "Interested in" list on every quote form.
export const SERVICES = [
  {
    id: 'monthly-content',
    title: 'Monthly Content',
    slide: 'Monthly content that keeps your business top of mind',
    short: 'A consistent schedule of short-form video each month, filmed in planned shoot days to minimize disruption to your business.',
    points: [
      'A content plan prepared before each month of filming',
      'Scheduled shoot days with minimal disruption to your operations',
      'Edited clips delivered ready to publish',
    ],
  },
  {
    id: 'podcast',
    title: 'Podcast / Q&A',
    inline: 'podcasts and Q&As', // how it reads mid-sentence
    slide: 'Your story, in your own words',
    short: 'A podcast-style conversation or Q&A, filmed at your business or a partner venue and edited into a full episode and short clips.',
    points: [
      'Filmed at your place of business or at a local partner venue',
      'A full episode and short clips from every recording',
      'A guided, conversational format; no on-camera experience required',
    ],
  },
  {
    id: 'events',
    title: 'Event Coverage',
    slide: 'Event coverage your community will remember',
    short: 'Professional coverage of grand openings, festivals, community events and ribbon cuttings, from start to finish.',
    points: [
      'Grand openings, festivals, fundraisers and municipal events',
      'A recap edit that conveys the atmosphere of the day',
      'Clips for social media, the press and future promotion',
    ],
  },
  {
    id: 'projects',
    title: 'Brand Films & Projects',
    slide: 'Brand films with a clear beginning, middle and end',
    short: 'Brand films, launches and special projects that present the complete picture of your business.',
    points: [
      'Brand films and company overview videos',
      'Launches, job-site documentation and before-and-after features',
      'Public project updates for municipalities',
    ],
  },
];

type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const NAV: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '/services',
    label: 'Services',
    children: [
      ...SERVICES.map((s) => ({ href: `/services#${s.id}`, label: s.title })),
      { href: '/services#drone', label: 'Drone & Aerial' },
      { href: '/services#work', label: 'Our Work' },
    ],
  },
  { href: '/diy', label: 'DIY' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/stories', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];
