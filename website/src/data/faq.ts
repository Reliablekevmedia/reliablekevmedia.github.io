import { FOUNDED, GEAR, TURNAROUND } from './business';
import { ADD_ONS, FIRST_VIDEO_FREE, PACKAGES } from './pricing';

const [single, half, full] = PACKAGES;
const [drone] = ADD_ONS;

// Questions people ask before booking. Shown on the Services page (/services#faq).
export const FAQ = [
  ...(FIRST_VIDEO_FREE.on
    ? [{ q: 'Is my first video really free?', a: `Yes. ${FIRST_VIDEO_FREE.terms} No contract and no catch. It is the easiest way to see how we work.` }]
    : []),
  {
    q: 'How long have you been doing this?',
    a: `Since ${FOUNDED}. Reliable Kev Media has spent the last few years filming towns, local businesses and trade companies across North Jersey.`,
  },
  {
    q: 'How long until I get my video?',
    a: `Most projects are delivered in ${TURNAROUND}, depending on the scope of work. Bigger projects get a timeline agreed before we start.`,
  },
  {
    q: 'How much does it cost?',
    a: `A single video is ${single.price}: ${single.short}. For events, a half day (up to 4 hours) starts at ${half.price} and includes ${half.short}. A full day (up to 8 hours) starts at ${full.price} and includes ${full.short}. Drone footage can be added from ${drone.price}. Everything else, like brand films, a sit-down story with the owner, the podcast and monthly content, gets a custom quote. You always get a clear price before anything is filmed.`,
  },
  {
    q: "What's the difference between a package and a custom quote?",
    a: 'A package (a single video, or a half or full day at your event) is for when you want us to come film: clear deliverables and a clear price. A custom quote is for everything else, like brand films, a sit-down story with the owner, the podcast and monthly content, which take more planning, directing and editing.',
  },
  {
    q: 'Do I get the raw footage?',
    a: 'Your price includes the edited videos listed. Raw footage is not included, but it can be added to any project. Just ask and we will include it in your quote.',
  },
  {
    q: 'Can I get my video faster?',
    a: `Every project gets the same care, so edited videos are delivered in ${TURNAROUND}. Rush delivery is not offered.`,
  },
  {
    q: 'Can I add more videos or hours?',
    a: 'Yes. Anything beyond what is included, like extra videos, extra hours or extra revisions, is quoted before any work begins, so you always know the price up front.',
  },
  {
    q: 'What gear do you use?',
    a: `${GEAR.cameras} with ${GEAR.support.toLowerCase()}, plus a ${GEAR.drone} for aerial shots. Two cameras means interviews and podcasts are covered from two angles.`,
  },
  {
    q: 'Where do you film?',
    a: 'All over North Jersey: Bergen, Passaic, Essex, Morris and Hudson County. If you are a little outside that, ask.',
  },
  {
    q: 'Do I need to be comfortable on camera?',
    a: 'No. We direct the shoot and keep it relaxed, so you can just talk about what you know. No script and no camera experience needed.',
  },
  {
    q: 'What happens after I reach out?',
    a: 'We start with a free planning call. We learn about your business and what you want people to know, then send you a plan and a price.',
  },
  {
    q: 'Can I combine services?',
    a: 'Yes, and most clients do. A podcast episode can feed a month of clips, and event coverage can turn into a brand film. Drone footage can be added to any of them.',
  },
];
