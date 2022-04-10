import type { SpotifyPlaylist, SpotifyTrack } from '../types';
import analytics from './analytics';

export const getSpotifyPlaylistTracks = async (playlist: SpotifyPlaylist) => {
  const res = await fetch(
    `https://us-central1-audial-6e1bd.cloudfunctions.net/tracks?playlist=${playlist.id}`,
    {
      method: 'GET'
    }
  );
  return (await res.json()) as SpotifyTrack[];
};

export const getDailySpotifyTrack = async (playlistId: string, forceRandom: boolean) => {
  analytics.track('get-track', {
    playlist: playlistId || 'default',
    random: forceRandom
  });
  const res = await fetch(
    `https://us-central1-audial-6e1bd.cloudfunctions.net/daily?playlist=${playlistId}&random=${forceRandom}&locale=${new Date().toDateString()}`,
    {
      method: 'GET',
      cache: 'reload'
    }
  );
  return (await res.json()) as { daily: SpotifyTrack; tracks: SpotifyTrack[] };
};
