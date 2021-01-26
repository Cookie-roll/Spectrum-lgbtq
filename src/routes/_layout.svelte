<script>
	import Nav from '../components/Nav.svelte';
	import Disclaimer from '../components/Disclaimer.svelte';

	import {t} from '../localisation';

	export let segment;

	import { stores } from '@sapper/app';
	import { onMount } from 'svelte';
    import Matomo, { matomo } from '@dexlib/svelte-matomo/src/index.svelte';

    const { page } = stores();

    $: if ($page) { matomo.trackPageView(); }

    onMount(() => matomo.trackPageView());
</script>

<script context="module">
    export async function preload({ path, query }) {
        global.currentLocale = query.l || 'en';
        return {}
    }
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
    <meta name="author" content="{`${t('author.name')} <${t('author.email')}>`}" />

    <meta property="og:type" content="article" />
    <meta property="og:image" content={`${process.env.BASE_URL}/image.png`} />

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image" content={`${process.env.BASE_URL}/image.png`} />
</svelte:head>

<div>
    <Nav {segment}/>

    <main>
        <slot></slot>
        <Disclaimer/>
    </main>
</div>

<Matomo url="https://matomo.avris.it" siteId={19} />

