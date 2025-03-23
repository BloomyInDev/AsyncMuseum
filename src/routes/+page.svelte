<script lang="ts">
	import { onMount } from 'svelte';

	let visitors = $state(0);
	onMount(async () => {
		const data = await fetch('/visitors');

		const json: {visitors:number} = await data.json();

		visitors = json.visitors
	});
</script>

<article id="hero">
	<h2>Venez visiter notre musée ce week-end</h2>
</article>
<article id="bullet">
	<div>
		<img src="/money.svg" alt="" />
		<div>
			<h3>Pas cher</h3>
			<p>C'est pas cher, seulement 6,99 €</p>
		</div>
	</div>
	<div>
		<img src="/dinosaur-black.svg" alt="" />
		<div>
			<h3>Dinosaures</h3>
			<p>Venez visiter notre site historique, tout comme {visitors} visiteur(s)</p>
		</div>
	</div>
</article>
<article id="cta">
	<a id="go2shop" href="/shop">Achetez vos billets</a>
</article>

<style>
	article#hero {
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('/dinosaurs.png');
		background-size: cover;
		background-position: center;
		min-height: 100%;
		height: calc(100vh - 3.5rem);
	}

	article#hero > h2 {
		margin: 0;
		background-color: rgba(160, 160, 160, 0.8);
		border-radius: 0.5rem;
		padding: 1rem;
		font-size: xx-large;
		font-weight: bolder;
	}

	article#bullet {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 1rem;
		gap: 1rem;
	}

	article#bullet > div {
		display: flex;
		background-color: grey;
		border-radius: 3rem;
		font-size: larger;
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}

	article#bullet > div > img {
		width: 33%;
	}

	article#cta {
		margin: 2rem;
		display: flex;
		justify-content: center;
	}

	a#go2shop {
		background-color: #0072be;
		color: black;
		text-decoration: none;
		font-weight: bolder;
		font-size: xx-large;
		padding: 1rem;
		border-radius: 1rem;

		transition: all 250ms ease-in-out;
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}
	a#go2shop:hover {
		background-color: #007dd1;
	}

	@media (max-width: 616px) {
		article#hero > h2 {
			font-size: larger;
			max-width: 50%;
		}

		article#bullet {
			grid-template-columns: 1fr;
		}
	}
</style>
