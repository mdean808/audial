export interface SpotifyArtist {
  href: string;
  id: string;
  name: string;
  uri: string;
}

interface SpotifyImage {
  width: number;
  height: number;
  url: string;
}

export interface SpotifyAlbum {
  artists: SpotifyArtist[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  uri: string;
}

export interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  duration_ms: number;
  href: string;
  id: string;
  name: string;
  preview_url: string;
  uri: string;
  added_at: string;
}

export interface SpotifyPlaylistItem {
  added_at: string;
  added_by: object;
  is_local: boolean;
  track: SpotifyTrack;
}

export interface SpotifyPlaylistTracks {
  href: string;
  items: SpotifyPlaylistItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  error?: {
    status: number;
    message: string;
  };
}

export interface SpotifyPlaylist {
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  tracks: SpotifyPlaylistTracks;
  uri: string;
}

export interface SpotifyToken {
  token: string;
  expires_at: Date;
  type: string;
}
