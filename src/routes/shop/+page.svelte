<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<article>
	<img src="/ticket.jpg" alt="Ticket" />

	<form action="/shop/buy" method="post">
		<h2>Ticket d'entrée pour le musée AsyncMuseum</h2>
		<label for="number">Nombre de tickets</label>
        <input type="number" name="number" min="1" max="69420">
        <button type="submit">Acheter</button>
	</form>
</article>

<style>
	article {
		display: flex;
	}

	img {
		width: 50%;
	}

	@media (max-width: 616px) {
		article {
			flex-direction: column;
		}
		img {
			width: 100%;
		}
	}
</style>
