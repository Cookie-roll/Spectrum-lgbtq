<script>
    import { emoji } from '../helpers';
    import { t } from '../localisation';
</script>

<footer>
    <div class="container">
        <div>
            <ul use:emoji>
                <li>
                    <a href="https://avris.it" target="_blank" rel="noopener">
                        👨🏽‍💻 {t('author.attribution')}
                    </a>
                </li>
                {#if t('translation.attribution')}
                    <li>
                        <a href={t('translation.link')} target="_blank" rel="noopener">
                            ✍️ {t('translation.attribution')}:
                            {t('translation.name')}
                        </a>
                    </li>
                {/if}
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
                    <a href='privacy'>
                        🔒 {t('privacy.header')}
                    </a>
                </li>
                <li>
                    <a href="https://cake.avris.it" target="_blank" rel="noopener">
                        <img src="https://cake.avris.it/favicon.png" class="emoji" alt="Cake logo">
                        {t('otherProjects.cake')}
                    </a>
                </li>
            </ul>
        </div>
        <div class="small">
            <strong class="bigger">{t('disclaimer.header')}</strong>
            <p>{t('disclaimer.author')}</p>
            <p>{t('disclaimer.issues')}</p>
            <p use:emoji>{@html t('disclaimer.examples')}</p>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        background: #333;
        color: #fff;
        padding: 2rem;
        .container {
            display: grid;
            grid-gap: 1rem;
            max-width: 1200px;
            margin: 0 auto;
        }
    }

    @media(max-width: 780px) {
        footer .container {
            grid-template-columns: 1fr;
        }
    }

    @media(min-width: 781px) {
        footer .container {
            grid-template-columns: 1fr 1fr;
        }
    }

    .small {
        font-size: 80%;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
        li {
            padding-bottom: 1rem;
        }
    }

    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    .bigger {
        font-size: 120%;
    }
</style>
