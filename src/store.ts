import { persistentAtom, persistentMap } from '@nanostores/persistent';
import type { Attempt, Song, SpotifyToken } from './types';
import { atom } from 'nanostores';

const objectValueCoder = {
  encode(val) {
    return JSON.stringify(val);
  },
  decode(val) {
    try {
      return JSON.parse(val);
    } catch (e) {
      console.log(e, val);
    }
  }
};

const booleanValueCoder = {
  encode(val) {
    if (val) return '1';
    else return '0';
  },
  decode(val) {
    return val === '1';
  }
};

export const currentAttempt = persistentMap<Attempt>(
  'current_attempt',
  <Attempt>{ attempts: 0, guesses: [], correct: false, date: new Date() },
  objectValueCoder
);

export const readInstructions = persistentAtom('read_instructions', false, booleanValueCoder);

export const currentSong = persistentMap<Song>('current_song', <Song>{}, objectValueCoder);

export const spotifyAuth = persistentMap<SpotifyToken>(
  'spotify_auth',
  <SpotifyToken>{},
  objectValueCoder
);

export const songPaused = atom(true);
