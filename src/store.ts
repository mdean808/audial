import { persistentAtom, persistentMap } from '@nanostores/persistent';
import type { Attempt, Song, SpotifyTrack } from './types';
import { atom, map } from 'nanostores';

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

// local storage
export const currentAttempt = persistentMap<Attempt>(
  'current_attempt',
  <Attempt>{ attempts: 0, guesses: [], correct: false, date: new Date() },
  objectValueCoder
);

export const pastAttempts = persistentMap<{ array: Attempt[] }>(
  'past_attempts',
  { array: [] },
  objectValueCoder
);

export const readInstructions = persistentAtom('read_instructions', true, booleanValueCoder);

export const currentSong = persistentMap<Song>('current_song', <Song>{}, objectValueCoder);

// normal state
export const songPaused = atom(true);

export const temporaryAttempt = map<Attempt>(<Attempt>{
  attempts: 0,
  guesses: [],
  correct: false,
  date: new Date()
});

export const isRandom = atom(false);

export const loading = atom(true);

export const allTracks = atom(<SpotifyTrack[]>[]);
