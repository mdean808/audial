export interface Song {
  name: string;
  artist: string;
  id: string;
  preview?: string;
}

export interface Guess {
  song: Song;
  correct: boolean;
}

export interface Attempt {
  guesses: Guess[];
  date: Date;
  correct: boolean;
  attempts: number;
}
