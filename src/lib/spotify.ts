import type { SpotifyPlaylist, SpotifyTrack } from '$src/types';
import analytics from '$lib/analytics';
import { dev } from '$app/env';

const BASE_URL = !dev
  ? 'https://us-central1-audial-6e1bd.cloudfunctions.net'
  : 'http://localhost:5001/audial-6e1bd/us-central1';

export const getSpotifyPlaylistTracks = async (playlist: SpotifyPlaylist) => {
  const res = await fetch(`${BASE_URL}/tracks?playlist=${playlist.id}`, {
    method: 'GET'
  });
  return (await res.json()) as SpotifyTrack[];
};

export const getDailySpotifyTrack = async (playlistId: string, random: boolean) => {
  const res = await fetch(
    `${BASE_URL}/daily?playlist=${playlistId}&random=${random}&locale=${new Date().toDateString()}`,
    {
      method: 'GET',
      cache: 'reload'
    }
  );
  await analytics.track('get-track', {
    playlist: playlistId || 'default',
    random: random
  });
  if (res.status === 400) {
    // toast.push('Invalid Spotify playlist provided. Please try again.');
    // await goto('/custom');
    // return { daily: <SpotifyTrack>{}, tracks: <SpotifyTrack[]>[] };
  }
  return (await res.json()) as { daily: SpotifyTrack; tracks: SpotifyTrack[] };
};
