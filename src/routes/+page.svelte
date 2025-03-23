<script></script>

<div id="hero">
	<p>Venez visiter notre musée ce week-end</p>
</div>
<div>
    Other thing
</div>


<style>
	div#hero {
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('/dinosaurs.png');
		background-size: cover;
		background-position: center;
		min-height: 100%;
		height: calc(100vh - 3.5rem);
	}

	p {
		margin: 0;
		background-color: rgba(160, 160, 160, 0.8);
		border-radius: 0.5rem;
		padding: 1rem;
		font-size: xx-large;
		font-weight: bolder;
	}

	@media (max-width: 616px) {
		p {
            font-size: larger;
            max-width: 50%;
		}
	}
</style>
