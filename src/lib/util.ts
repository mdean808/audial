import type { Song, SpotifyTrack } from '$src/types';
import { allTracks, currentSong, loading, playlist } from '../store';
import { getDailySpotifyTrack } from './spotify';

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


export const loadGame = async (playlistId: string, random: boolean) => {
  loading.set(true);
  const trackResponse = await getDailySpotifyTrack(playlistId, random);
  allTracks.set(trackResponse.tracks);
  const song = convertSpotifyTrackToSong(trackResponse.daily);
  currentSong.set(song);
  playlist.set(playlistId);
  loading.set(false);
};
