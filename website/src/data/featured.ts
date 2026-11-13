// Finished client pieces shown with sound and player controls (homepage + Work page).
// The video lives in public/videos/<video>.mp4 with a <video>.jpg poster.
export interface FeaturedVideo {
  video: string;
  client: string;
  person: string;
  kind: string;
  summary: string;
}

export const FEATURED: FeaturedVideo[] = [
  {
    video: 'alpha-health-intro',
    client: 'Alpha Health',
    person: 'Dr. Nicole Waterhouse, Nurse Practitioner',
    kind: 'Website hero video',
    summary:
      "An on-camera introduction for Alpha Health's health optimization center. Dr. Waterhouse explains her focus, the patients she serves and the journey they take, giving new visitors a clear understanding of the practice and the person behind it before they book a visit.",
  },
];
