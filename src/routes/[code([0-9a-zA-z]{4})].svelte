<script context="module">
    import { axes } from '../config';
    import { convertBase } from "../helpers";

	export async function preload({ params, query }) {
	    try {
            const p = convertBase(params.code, 62, 10).padStart(7, '0');
            if (!p.match(/^[0-9]{7}$/)) {
                throw new Error(`invalid value "${p}"`);
            }
            return {
                code: params.code,
                values: axes.map(function(axis, i) {
                    return {axis, value: parseInt(p.substr(i, 1))};
                }),
            };
	    } catch (e) {
	        this.error(404, 'Not found');
	    }

	}
</script>

<script>
    import Slider from '../components/Slider.svelte';

    import { emoji} from '../helpers';
    import { t } from '../localisation';

    export let values;
	export let code;
</script>

<style lang="scss">
    @import '../style/theme';

    h2 {
        font-size: 2rem;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 3rem;
        font-weight: bold;
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
</style>

<svelte:head>
	<title>{t('mine')}</title>
    <meta name="description" content={t('share.text')} />

    <meta property="og:title" content={t('mine')} />
    <meta property="og:description" content={t('share.text')}>
    <meta property="og:url" content={`${process.env.BASE_URL}/${code}`} />

    <meta name="twitter:title" content={t('mine')} />
    <meta name="twitter:description" content={t('share.text')} />
</svelte:head>

<h2>
    {t('mine')}:
</h2>

<ul>
{#each values as {axis, value}, i (axis)}
    <li>
        <h3>
            {t(`axes.${axis}.label`)}
        </h3>
        <Slider min={1} max={9} bind:value={values[i].value} disabled/>
        <div class="scale">
            <span>{t(`axes.${axis}.left`)}</span>
            <span>{t(`axes.${axis}.middle`)}</span>
            <span>{t(`axes.${axis}.right`)}</span>
        </div>
    </li>
{/each}
</ul>

<div class="jumbotron">
    <a class="btn btn-block big" href='.' use:emoji>
        💬 {t('generate')}
    </a>
</div>
