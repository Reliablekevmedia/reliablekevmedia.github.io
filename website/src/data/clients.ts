// Businesses and organizations Kev has filmed for, shown in the "Trusted by" logo wall
// (homepage and Work page). Logos live in public/images/clients/<file>, trimmed, on a transparent
// background. Only list clients Kev is comfortable naming publicly.
export interface Client {
  name: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: 'Garden State Home Exteriors', logo: 'garden-state-home-exteriors.png' },
  { name: '24/7 Drain & Sewer', logo: '247-drain-and-sewer.png' },
  { name: 'Fair Lawn Arts Council', logo: 'fair-lawn-arts-council.png' },
  { name: 'HeART Haus', logo: 'heart-haus.png' },
  { name: 'HEART 9/11', logo: 'heart-911.png' },
  { name: "Jed's Party Services", logo: 'jeds-party-services.png' },
  { name: 'The New Norm', logo: 'the-new-norm.png' },
  { name: 'Fair Lawn Main Street Inc.', logo: 'fair-lawn-main-street.png' },
  { name: 'Latin Heritage Celebration Fair Lawn', logo: 'celebration-fair-lawn.png' },
];
