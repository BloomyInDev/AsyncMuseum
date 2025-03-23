<script>
    import NavBar from "./NavBar.svelte";
</script>
<header>
    <h1>AsyncMuseum</h1>
    <NavBar/>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #0069af;
        padding: .5rem;
        height: 3rem;
    }

    h1 {
        margin: 0;
    }
</style>