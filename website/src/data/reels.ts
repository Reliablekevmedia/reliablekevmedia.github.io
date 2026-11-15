// Finished vertical videos (with sound) made for local clients. Shown in Our Work on the Services page (grouped by
// town) and on each town's page. Files: public/videos/<video>.mp4 with a <video>.jpg poster (720x1280), made from
// Kev's uploads (GitHub release "MainStreet") with ffmpeg: 30 fps, CRF 29, AAC audio, faststart.
export interface Reel {
  video: string;
  title: string;
  client: string;
  /** Optional credit line, e.g. a production partner. */
  credit?: string;
  town: string;
  kind: string;
  summary: string;
}

export const REELS: Reel[] = [
  {
    video: 'fl-mural-ribbon-cutting',
    title: 'Mural ribbon cutting',
    client: 'Fair Lawn Main Street Inc.',
    town: 'Fair Lawn',
    kind: 'Event coverage',
    summary:
      'The ribbon cutting for new downtown murals, inspired by ideas from Fair Lawn elementary school students, with the mayor and the community members who made them possible.',
  },
  {
    video: 'fl-broadway-improvement',
    title: 'Broadway improvement day',
    client: 'Fair Lawn Main Street Inc.',
    town: 'Fair Lawn',
    kind: 'Community highlight',
    summary:
      'Volunteers planting, cleaning and improving the Broadway business district under the guidance of Fair Lawn Main Street, with thanks to the Fair Lawn Special Improvement District.',
  },
  {
    video: 'fl-art-in-the-park',
    title: 'Art in the Park festival',
    client: 'Fair Lawn Arts Council',
    credit: 'with One Brick Media', // TODO (Kev): confirm the credit for this piece
    town: 'Fair Lawn',
    kind: 'Event recap',
    summary:
      "Fair Lawn's annual Art in the Park festival: creative stations for children, local artists, live music and the families who came out to enjoy it.",
  },
  {
    video: 'fl-meet-the-builders',
    title: 'Meet Fair Lawn builders',
    client: 'Fair Lawn, NJ',
    town: 'Fair Lawn',
    kind: 'Business story',
    summary:
      'Why build in Fair Lawn? A local builder explains what draws families to the town, paired with aerial views of its neighborhoods, downtown and landmarks.',
  },
];
