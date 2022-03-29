<script lang='ts'>
  import { currentAttempt, currentSong } from '../store';
  import type { Attempt, Song } from '../types';

  const resetData = () => {
		//readInstructions.set(false);
		currentAttempt.set(<Attempt>{ attempts: 0, guesses: [], correct: false });
		currentSong.set(<Song>{});
		window.location.href = '';
	};
</script>

<div>
	<header class='border-b'>
		<div class='max-w-screen-md mx-auto '>
			<div class='flex justify-evenly  p-3 items-center'>
				<div class='flex flex-1'>
					<button
						class='px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm w-10 h-10'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<circle cx='12' cy='12' r='10' />
							<line x1='12' y1='16' x2='12' y2='12' />
							<line x1='12' y1='8' x2='12.01' y2='8' />
						</svg>
					</button>
					<button
						class='px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm w-10 h-10'
					>
						<svg
							on:click={() => {
                resetData();
              }}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							stroke-width='2'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
							/>
						</svg>
					</button>
				</div>
				<h1 class='text-3xl font-bold flex-grow text-center flex-1 cursor-pointer'>audial</h1>
				<div class='flex flex-1 justify-end'>
					<button
						on:click={() => {
              resetData();
            }}
						class='px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<path d='M12 20v-6M6 20V10M18 20V4' />
						</svg>
					</button>
					<button
						class='px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<circle cx='12' cy='12' r='10' />
							<path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
							<line x1='12' y1='17' x2='12.01' y2='17' />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</header>
</div>
