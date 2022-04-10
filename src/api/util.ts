import type { Song, SpotifyTrack } from '../types';

export const convertSpotifyTrackToSong = (track: SpotifyTrack) => {
  const song: Song = {
    name: track.name,
    artist: track.artists ? track.artists[0].name : 'unknown artist',
    id: track.id,
    preview: track.preview_url
  };
  return song;
};

export const daysBetweenDates = (d1: Date, d2: Date) => {
  const diffTime = Math.abs(d1.getTime() - d2.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
