import { FOUNDED, GEAR, TURNAROUND } from './business';
import { ADD_ONS, FIRST_VIDEO_FREE, PACKAGES } from './pricing';

const [single, half, full] = PACKAGES;
const [drone] = ADD_ONS;

// Questions people ask before booking. Shown on the Services page (/services#faq).
export const FAQ = [
  ...(FIRST_VIDEO_FREE.on
    ? [{ q: 'Is my first video really free?', a: `Yes. ${FIRST_VIDEO_FREE.terms} There is no contract and no obligation. It is the simplest way to experience how we work.` }]
    : []),
  {
    q: 'How long have you been in business?',
    a: `Since ${FOUNDED}. Reliable Kev Media has spent the past several years filming municipalities, local businesses and trade companies across North Jersey.`,
  },
  {
    q: 'When will I receive my video?',
    a: `Most projects are delivered within ${TURNAROUND}, depending on the scope of work. Larger projects receive an agreed timeline before production begins.`,
  },
  {
    q: 'How much does it cost?',
    a: `A single video is ${single.price}: ${single.short}. For events, a half day (up to 4 hours) starts at ${half.price} and includes ${half.short}. A full day (up to 8 hours) starts at ${full.price} and includes ${full.short}. Drone footage can be added from ${drone.price}. All other projects, including brand films, sit-down interviews with owners, podcasts and monthly content, are priced by custom quote. You will always receive a clear price before any filming begins.`,
  },
  {
    q: 'What is the difference between a package and a custom quote?',
    a: 'A package (a single video, or half-day or full-day event coverage) is designed for clients who need filming with defined deliverables and a set price. A custom quote covers all other work, such as brand films, sit-down interviews with owners, podcasts and monthly content, which require additional planning, direction and editing.',
  },
  {
    q: 'Do I receive the raw footage?',
    a: 'Your price includes the edited videos listed. Raw footage is not included, but it can be added to any project on request and will be reflected in your quote.',
  },
  {
    q: 'Can my video be delivered sooner?',
    a: `Every project receives the same level of care, so edited videos are delivered within ${TURNAROUND}. Rush delivery is not available.`,
  },
  {
    q: 'Can I add more videos or hours?',
    a: 'Yes. Any work beyond the included scope, such as additional videos, hours or revisions, is quoted before it begins, so you always know the price in advance.',
  },
  {
    q: 'What equipment do you use?',
    a: `${GEAR.cameras} with ${GEAR.support.toLowerCase()}, as well as a ${GEAR.drone} for aerial footage. Two cameras allow interviews and podcasts to be filmed from two angles.`,
  },
  {
    q: 'Where do you film?',
    a: 'Throughout North Jersey, including Bergen, Passaic, Essex, Morris and Hudson counties. If your location is slightly outside this area, please contact us.',
  },
  {
    q: 'Do I need to be comfortable on camera?',
    a: 'No. We direct every shoot and keep the process relaxed, so you can simply speak about what you know. No script or on-camera experience is required.',
  },
  {
    q: 'What happens after I contact you?',
    a: 'We begin with a complimentary consultation to learn about your business and what you would like people to know. We then provide a plan and a price.',
  },
  {
    q: 'Can I combine services?',
    a: 'Yes, and many clients do. A podcast episode can supply a month of clips, and event coverage can become a brand film. Drone footage can be added to any service.',
  },
];
