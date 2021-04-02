<script>
    import Slider from '../components/Slider.svelte';

    import { axes, baseUrl } from '../config';
    import { convertBase } from "../helpers";
    import { t } from '../localisation';
    import { emoji } from '../helpers';
    import { onMount } from 'svelte';
    import ClipboardJS from 'clipboard';

    const values = axes.map(function(axis, i) {
         return {axis, value: 5};
    });

    onMount(() => {
        new ClipboardJS('[data-clipboard-target]');
    });

    $: overall = parseInt(values.map(v => v.value).join(''));
    $: code = convertBase(overall, 10, 62).padStart(4, '0');
    $: url = `${baseUrl}/${code}`;
</script>

<style lang="scss">
    @import '../style/theme';

    h2 {
        font-size: 2rem;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 3rem;
        font-weight: bold;
        small {
            font-size: 1rem;
            font-weight: normal;
        }
    }
    h3 {
        font-weight: bold;
    }
    ul {
        padding: 0;
        li {
            list-style-type: none;
            margin-bottom: 3rem;
        }
    }
    .scale {
        display: flex;
        justify-content: space-between;
    }
    @media(min-width: 600px) {
        .scale span {
            display: inline-block;
            width: 10rem;
            &:nth-child(2) {
                text-align: center;
            }
            &:last-child {
                text-align: right;
            }
        }
    }

    .input-group {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        width: 100%;
        vertical-align: middle;

        > input, button, .btn {
            &:not(:first-child) {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-left: 0;
            }
            &:not(:last-child) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }

    .btn-clear {
        background: transparent;
        padding: 0;
        float: right;
        display: inline-block;
        cursor: pointer;
        border: none;
    }
</style>

<svelte:head>
	<title>{t('title')}</title>

    <meta property="og:title" content={t('title')} />
    <meta property="og:description" content={t('description')}>
    <meta property="og:url" content={process.env.BASE_URL} />

    <meta name="twitter:title" content={t('title')} />
    <meta name="twitter:description" content={t('description')} />
</svelte:head>

<h2>
    {t('description')}
    <br/>
    <small>{t('generateHelper')}</small>
</h2>

<ul>
{#each values as {axis, value}, i (axis)}
    <li>
        <h3>
            {t(`axes.${axis}.label`)}
            {#if value > 0}
                <button use:emoji class="btn-clear" on:click={_ => values[i].value = 0}>❎</button>
            {/if}
        </h3>
        <Slider min={1} max={9} bind:value={values[i].value}/>
        <div class="scale">
            <span>{t(`axes.${axis}.left`)}</span>
            <span>{t(`axes.${axis}.middle`)}</span>
            <span>{t(`axes.${axis}.right`)}</span>
        </div>
    </li>
{/each}
</ul>

<div class="jumbotron">
    <div class="input-group my">
        <input readonly value={url} class="flex-1" id="url"/>
        <button use:emoji title={t('share.copy')} data-clipboard-target="#url">📋</button>
    </div>

    <div class="input-group my">
        <a href={`http://www.facebook.com/sharer.php?t=${encodeURIComponent(t('share.text'))}&u=${encodeURIComponent(url)}`}
           target="_blank" rel="noopener"
           class="btn flex-1"
        >
            {t('share.facebook')}
        </a>
        <a href={`https://twitter.com/share?text=${encodeURIComponent(t('share.text'))}&url=${encodeURIComponent(url)}`}
            target="_blank" rel="noopener"
            class="btn flex-1"
        >
            {t('share.twitter')}
        </a>
    </div>
</div>
