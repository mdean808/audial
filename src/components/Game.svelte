<script lang="ts">
  import Instructions from "./Instructions.svelte";
  import AutoComplete from "simple-svelte-autocomplete";
  import { onMount } from "svelte";

  import { currentAttempt, currentSong, readInstructions, songPaused, spotifyAuth } from "../store";
  import { getAllSpotifyPlaylistTracks, getRandomTrack, getSpotifyPlaylist, getSpotifyToken } from "../api/spotify";
  import { convertSpotifyTrackToSong } from "../api/util";
  import type { Attempt, Guess, Song, SpotifyPlaylist, SpotifyTrack } from "../types";
  import Button from "./Button.svelte";

  let attempt = <Attempt>{};
  let playlist = <SpotifyPlaylist>{};
  let allTracks = <SpotifyTrack[]>[];
  onMount(async () => {
    // Get Spotify authentication set up
    let auth = spotifyAuth.get();
    if (!auth.token) {
      auth = await getSpotifyToken();
      spotifyAuth.set(auth);
    }
    if (new Date(auth.expires_at) < new Date()) {
      auth = await getSpotifyToken();
      spotifyAuth.set(auth);
    }
    // load the current playlist
    playlist = await getSpotifyPlaylist("5LQuCyn8AhcHpl31DgLaxL", auth.token);
    // get a random track and ALL tracks from the playlist

    allTracks = await getAllSpotifyPlaylistTracks(playlist, auth.token);
    const forceRandom = new URL(window.location.href).searchParams.get("random") === "true";
    const randomTrack = await getRandomTrack(allTracks, forceRandom);
    // if we are in a new date from the past, take the new random song and set it to the current one.
    //    reset the attempts.
    if (new Date(currentAttempt.get().date) !== new Date() || forceRandom) {
      const song = convertSpotifyTrackToSong(randomTrack);
      currentAttempt.set(<Attempt>{
        guesses: [],
        date: new Date(),
        correct: false,
        attempts: 0
      });
      currentSong.set(song);
    }
    attempt = currentAttempt.get();
  });

  currentAttempt.listen((value) => (attempt = value));

  let searchResults = [];
  let currentSelectedSong = <Song>{};

  const chooseSong = () => {
    if (!currentSelectedSong) return;
    const guesses = [...(attempt.guesses || [])];
    if (currentSelectedSong.id === currentSong.get().id) {
      guesses.push(<Guess>{
        song: currentSong.get(),
        correct: true
      });
      currentAttempt.setKey("guesses", guesses);
      currentAttempt.setKey("correct", true);
      currentAttempt.setKey("attempts", attempt.attempts + 1);
    } else {
      const track = allTracks.find((t) => t.id == currentSelectedSong.id);
      guesses.push(<Guess>{
        song: convertSpotifyTrackToSong(track),
        correct: false
      });
      currentAttempt.setKey("guesses", guesses);
      currentAttempt.setKey("attempts", attempt.attempts + 1);
    }
    currentSelectedSong = undefined;
    songPaused.set(true);
  };

  const searchSongs = async (query: string) => {
    // todo: make search better
    searchResults = allTracks.filter((t) => {
        return (t.name + " " + t.artists[0].name).toLowerCase().includes(query.toLowerCase());
      }
    );
    searchResults = searchResults.map((t) => convertSpotifyTrackToSong(t));
    return searchResults;
  };
</script>

<div>
  <Instructions hidden={$readInstructions} />

  <!-- PLAYLIST/GENRE TITLE -->
  {#if attempt.attempts === 0}
    <div class="w-full px-0 sm:px-20 transition-all duration-200">
      <span class="text-center mx-auto w-full text-blue-100">listen to the song and try to guess it correctly. you have 6 attempts.</span>
    </div>
  {/if}
  <!-- GUESSES -->
  <div class="w-full px-0 transition-all sm:px-20 items-center game">
    {#if attempt.guesses}
      {#each attempt.guesses.filter((g) => !g.correct) as guess}
        <div
          title="Open in Spotify"
          on:click={() => {
            window.open(`https://open.spotify.com/track/${guess.song.id}`, '_blank').focus();
          }}
          class="cursor-pointer border-orange-500 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden"
        >
          {guess.song.name} by {guess.song.artist}
        </div>
      {/each}
      {#each attempt.guesses.filter((g) => g.correct) as guess}
        <div
          title="Open in Spotify"
          on:click={() => {
            window.open(`https://open.spotify.com/track/${guess.song.id}`, '_blank').focus();
          }}
          class="cursor-pointer border-green-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden"
        >
          {guess.song.name} by {guess.song.artist}
        </div>
      {/each}
    {/if}
    {#if attempt.attempts < 6 && !attempt.correct}
      <div class="flex my-6" title="guess a song">
        <AutoComplete
          name="song-selection"
          className="w-10/12"
          inputClassName="border-gray-600 border-2 w-full h-8 px-2 py-5 rounded-sm bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200"
          dropdownClassName="p-0 bg-gray-900"
          placeholder={`${6 - attempt.attempts} ${(6 - attempt.attempts) !== 1 ? 'attempts' : 'attempt'} left`}
          items={searchResults}
          minCharactersToSearch={2}
          searchFunction={searchSongs}
          bind:selectedItem={currentSelectedSong}
          labelFieldName="name"
          valueFieldName="id"
          showLoadingIndicator
          noInputStyles
          hideArrow
        >
          <div
            slot="item"
            let:item
            let:label
            class="border-2 h-10 px-2 py-3 w-full text-left rounded-sm bg-gray-900 text-white hover:text-blue-500 hover:border-blue-500 overflow-ellipsis whitespace-nowrap overflow-hidden transition-colors duration-150"
          >
            <span>{item.name} by {item.artist}</span>
          </div>
          <div slot="no-results" class="py-1">
            <span>could not find this song in our list.</span>
          </div>
          <div slot="loading" class="py-1">
            <span>searching for songs...</span>
          </div>
        </AutoComplete>
        <div class="w-2/12 pl-4 mt-0.5" title="guess selected song">
          <Button title="Submit Song Guess" type="submit" className="w-full" on:click={chooseSong}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    {:else if attempt.correct}
      <div>
        <p>AWESOME JOB, YOU GUESSED</p>
        <p class="text-green-500">{currentSong.get().name} by {currentSong.get().artist}</p>
        <p>CORRECTLY!</p>
      </div>
    {:else if !attempt.correct}
      <div>
        <p>THE SONG WAS </p>
        <p class="text-red-600">{currentSong.get().name} by {currentSong.get().artist}</p>
      </div>
    {/if}
  </div>
</div>
