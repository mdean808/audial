import type { SpotifyPlaylist, SpotifyTrack } from '../types';
import analytics from './analytics';
import { dev} from '$app/env'

const BASE_URL = !dev ? 'https://us-central1-audial-6e1bd.cloudfunctions.net' : 'http://localhost:5001/audial-6e1bd/us-central1'

export const getSpotifyPlaylistTracks = async (playlist: SpotifyPlaylist) => {
  const res = await fetch(
    `${BASE_URL}/tracks?playlist=${playlist.id}`,
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
    `${BASE_URL}/daily?playlist=${playlistId}&random=${forceRandom}&locale=${new Date().toDateString()}`,
    {
      method: 'GET',
      cache: 'reload'
    }
  );
  return (await res.json()) as { daily: SpotifyTrack; tracks: SpotifyTrack[] };
};
