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
