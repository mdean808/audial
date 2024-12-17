# [audial](https://audial.mogdan.xyz)

audial is a wordle-style web game, but instead of formulating a word, the user guesses the song.

> ⚠️ NOTE: Audial uses the `preview_url` attribute from the Spotify API to play snippets of songs, and it appears that they've removed that attribute going forward for "security reasons." Unfortunately this means that audial is now defunct, and won't be fixed unless I find time to transition to a more reliable and developer-friendly music service API.

Expanded from just a song a day, audial also inlcudes:

- A randomization mode
- Support for custom playlists
- Stat and history tracking

## Technologies

- [Firebase Functions and Realtime Database](https://github.com/mdean808/audial-firebase)
- [SvelteKit](https://kit.svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [NanoStores](https://github.com/nanostores/nanostores)

## Development

Clone the repository, install dependencies with `yarn install` and start the
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of audial:

```bash
npm run build
```

An `index.html` will become available in `docs/`.

You can preview the production build with `npm run preview`.
