// Businesses and organizations Kev has filmed for, shown in the "Trusted by" logo rows
// (homepage and Work page). Only list clients Kev is comfortable naming publicly.
// public/images/clients/<logo> is the full-color logo with its background removed (source files in
// brand/client-logos/). w/h is the display size in px, chosen so every logo covers about the same area
// whatever its shape.
export interface Client {
  name: string;
  logo: string;
  w: number;
  h: number;
}

export const CLIENTS: Client[] = [
  { name: 'Garden State Home Exteriors', logo: 'garden-state-home-exteriors.png', w: 81, h: 79 },
  { name: '24/7 Drain & Sewer', logo: '247-drain-and-sewer.png', w: 77, h: 82 },
  { name: 'Fair Lawn Arts Council', logo: 'fair-lawn-arts-council.png', w: 58, h: 84 },
  { name: 'HeART Haus', logo: 'heart-haus.png', w: 76, h: 84 },
  { name: 'HEART 9/11', logo: 'heart-911.png', w: 65, h: 84 },
  { name: "Jed's Party Services", logo: 'jeds-party-services.png', w: 80, h: 80 },
  { name: 'The New Norm', logo: 'the-new-norm.png', w: 112, h: 57 },
  { name: 'Fair Lawn Main Street Inc.', logo: 'fair-lawn-main-street.png', w: 66, h: 84 },
  { name: 'Latin Heritage Celebration Fair Lawn', logo: 'celebration-fair-lawn.png', w: 92, h: 69 },
  { name: 'Retro Fitness', logo: 'retro-fitness.png', w: 163, h: 40 },
  { name: 'M&A Auto Spa', logo: 'ma-auto-spa.png', w: 96, h: 67 },
  { name: 'Haus Coffee', logo: 'haus-coffee.png', w: 87, h: 74 },
];
