<script>
    import { t, locales, currentLocale } from '../localisation';

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

		position: fixed;
		top: 0;
        width: 100%;
        z-index: 999;
        background: #fafafa;

        box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0,0,0,.25);
	}

    nav .container {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }

    .menu-main {
        flex-grow: 1;
    }

    .menu-main a {
        text-decoration: none;
        display: block;
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

	.menu li a {
        padding: 1rem 1rem;
        text-decoration: none;
        display: block;
    }

	@media(max-width: 780px) {
    	nav .container {
	        flex-direction: column;
        }
        .menu-main {
            display: flex;
            justify-content: space-between;
        }
        .menu-main img {
            height: 2rem;
            float: left;
            margin-right: .5rem;
        }
        .title {
            flex: 1 1 auto;
            margin-right: 1rem;
        }
        button.menu-trigger {
            padding-top: .5rem;
            padding-bottom: .5rem;
            margin-top: 1rem;
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
	@media(min-width: 781px) {
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
        .locale-links {
            margin-left: 1rem;
            margin-right: 1rem;
        }
	}
</style>

<nav>
    <div class="container">
        <ul class="menu-main">
            <li>
                <h1>
                    <a href='.'>
                        <img src="favicon.png" class="emoji" alt="Logo">
                        {t('title')}
                    </a>
                </h1>
            </li>
            <li class="title">
                <button class="menu-trigger big" on:click={() => {menuShown = !menuShown}} class:active={menuShown}>≡</button>
            </li>
        </ul>

        <ul class="menu locale-links" class:shown={menuShown} on:click={() => {menuShown = false}}>
            {#each Object.keys(locales) as locale, i}
                <li>
                    <a href="/?l={locale}" class:selected='{locale === currentLocale()}' on:click={switchLocale} data-locale={locale}>
                        {locale.toUpperCase()}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
