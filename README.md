# audial

[Visit audial](https://audial.mogdan.xyz)

----

Inspired by [heardle.app](https://heardle.app), audial is a wordle-style web game for guessing a different song each
day.

It is built on svelte and [some firebase functions](https://github.com/mdean808/audial-firebase) for interfacing with
the spotify api.

## Development

Once pulled the repository and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a
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

You can preview the production build with `npm run preview`.
