<script>
	import Nav from '../components/Nav.svelte';

	import {t} from '../helpers';

	export let segment;
</script>

<style lang="scss" global>
    @import '../style/global';

	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
    <meta name="description" content={t('description')} />
    <meta name="keywords" content={t('keywords')} />
    <meta name="author" content="Avris <andrea@avris.it>" />

    <meta property="og:type" content="article" />
    <meta property="og:image" content={`${process.env.BASE_URL}/banner.png`} />

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image" content={`${process.env.BASE_URL}/banner.png`} />
</svelte:head>

<div>
    <Nav {segment}/>

    <main>
        <slot></slot>
    </main>
</div>
