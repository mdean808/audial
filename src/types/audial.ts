export interface Song {
  name: string;
  artist: string;
  id: string;
  preview?: string;
}

export interface Guess {
  song: Song;
  correct: boolean;
  artistCorrect: boolean;
}

export interface Attempt {
  guesses: Guess[];
  date: Date;
  correct: boolean;
  attempts: number;
  type?: string;
}
