import type { SpotifyPlaylist, SpotifyToken, SpotifyTrack } from '../types';
import random from 'random';
import seedrandom from 'seedrandom';

export const getSpotifyToken = async () => {
  const body = new URLSearchParams();
  body.append('grant_type', 'client_credentials');

  const headers = new Headers();
  headers.append(
    'Authorization',
    `Basic ZTA2MjNlNTk1YjZkNGI2YTg5M2FlMDk5YzUzYzE3NWY6MzMwNDRmYTNmZTY3NDEzNmFhOWVmZDIyZjI0MGMyZjc=`
  );
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body,
    redirect: 'follow',
    headers
  });
  const json = await res.json();
  const token: SpotifyToken = {
    token: json.access_token,
    expires_at: new Date(Date.now() + json.expires_in * 1000),
    type: json.type
  };
  return token;
};

export const getSpotifyPlaylist = async (playlist: string, token: string) => {
  const res = await fetch(`https://api.spotify.com/v1/playlists/${playlist}/`, {
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`
    },
    method: 'GET'
  });
  const json: SpotifyPlaylist = await res.json();
  return json;
};

export const getAllSpotifyPlaylistTracks = async (playlist: SpotifyPlaylist, token: string) => {
  let items = playlist.tracks.items;
  let next = playlist.tracks.next;
  while (next) {
    const res = await fetch(next, {
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`
      },
      method: 'GET'
    });
    const newTracks = await res.json();
    if (newTracks.error) {
      throw new Error(`Oops! ${newTracks.error.status}: ${newTracks.error.message}`);
    }
    items = items.concat(newTracks.items);
    next = newTracks.next;
    items.push(newTracks.items);
  }
  // make sure we only get ones with previews
  items = items.filter((i) => i.track && i.track.preview_url);
  return items.map((item) => item.track);
};

export const getRandomTrack = async (tracks: SpotifyTrack[], forceRandom?: boolean) => {
  const date = new Date();
  date.setDate(date.getDate() + (forceRandom ? Math.random() * 10 * (Math.random() + 20) : 0));
  random.use(seedrandom(date.toLocaleDateString()));
  const rand = random.int(0, tracks.length - 1);
  return tracks[rand];
};
