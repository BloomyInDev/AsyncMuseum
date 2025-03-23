<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
    import '$lib/styles.css'
    import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Header/>
<main>
	{@render children()}
</main>
<Footer/>
