<script>
    import { emoji } from '../helpers';
    import { t, locales, currentLocale } from '../localisation';

	export let segment;

	let menuShown = false;
	function switchLocale(event) {
	    window.location.search = '?l=' + event.target.dataset.locale
        event.preventDefault();
        event.stopPropagation();
    }
</script>

<style>
	nav {
		border-bottom: 1px solid var(--secondary);
		padding: 0;

		display: flex;
		justify-content: space-between;

		position: fixed;
		top: 0;
        width: 100%;
        z-index: 999;
        background: #fafafa;

        box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0,0,0,.25);
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
	}

	li {
		display: inline;
	}

	li h1 {
        padding: 1rem 1rem;
        margin-bottom: 0;
        display: block;
        font-size: 1.25rem;
        font-weight: bold;
	}

	li a {
        padding: 1rem 1rem;
        text-decoration: none;
        display: block;
    }

	@media(max-width: 1263px) {
    	nav {
	        flex-direction: column;
        }
        .menu-main {
            display: flex;
            justify-content: space-between;
        }
        .title {
            flex: 1 1 auto;
            margin-right: 1rem;
        }
        button.menu-trigger {
            padding-top: .5rem;
            padding-bottom: .5rem;
            margin-top: .5rem;
            float: right;
            font-size: 14px;
        }
        .menu {
            display: none;
            flex-direction: column;
        }
        .menu.shown {
            display: flex;
        }
        .menu a {
            width: 100%;
        }
        li a.selected, li a:hover {
            position: relative;
        }

        li a.selected::before, li a:hover::before {
            position: absolute;
            content: '';
            width: 5px;
            height: 100%;
            background-color: var(--primary);
            display: block;
            left: 0;
            top: 0;
        }
	}
    .locale-first {
        margin-top: 1rem;
    }
	@media(min-width: 1264px) {
        button.menu-trigger {
            display: none;
        }
        li a.selected, li a:hover {
            position: relative;
            display: inline-block;
        }

        li a.selected::after, li a:hover::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: var(--primary);
            display: block;
            bottom: -1px;
            left: 0;
        }
        .locale-first {
            margin-top: 0;
            margin-left: 1rem;
        }
	}
</style>

<nav use:emoji>
	<ul class="menu-main">
	    <li>
	        <h1>
	            <img src="favicon.png" class="emoji" alt="Logo">
	            {t('title')}
            </h1>
        </li>
	    <li class="title">
	        <button class="menu-trigger big" on:click={() => {menuShown = !menuShown}} class:active={menuShown}>≡</button>
	    </li>
    </ul>

    <ul class="menu" class:shown={menuShown} on:click={() => {menuShown = false}}>
		<li>
            <a class:selected='{segment === undefined}' href='.'>
                💬 {t('generate')}
            </a>
		</li>
		<li>
            <a class:selected='{segment === "privacy"}' href='privacy'>
                🔒 {t('privacy.header')}
            </a>
		</li>
	    <li>
            <a href="https://avris.it" target="_blank" rel="noopener">
                👨🏽‍💻 {t('author.attribution')}
            </a>
	    </li>
        <li>
            <a href="https://gitlab.com/Avris/Spectrum" target="_blank" rel="noopener">
                💻 {t('source')}
            </a>
        </li>
        <li>
            <a href="https://paypal.me/AndreAvris" target="_blank" rel="noopener">
                🍻 {t('author.support')}
            </a>
        </li>
        <li>
            <a href="https://cake.avris.it" target="_blank" rel="noopener">
                <img src="https://cake.avris.it/favicon.png" class="emoji" alt="Cake logo">
                {t('otherProjects.cake')}
            </a>
        </li>
        {#each Object.keys(locales) as locale, i}
            <li class:locale-first={i === 0}>
                <a href="/?l={locale}" class:selected='{locale === currentLocale()}' on:click={switchLocale} data-locale={locale}>
                    {locale.toUpperCase()}
                </a>
            </li>
        {/each}
    </ul>
</nav>
