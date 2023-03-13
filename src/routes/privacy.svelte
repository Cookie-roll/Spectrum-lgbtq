<script>
    import { t } from '../localisation';
</script>

<svelte:head>
	<title>{t('title')} » {t('privacy.header')}</title>
</svelte:head>


<div>
    <h2>🔒 {t('privacy.header')}</h2>

    <p>
        {t('privacy.noData')}
    </p>
    <p>
        {t('privacy.tracking')}
    </p>
    <p>
        {t('privacy.contact')}
        <a href="mailto:andrea@avris.it" target="_blank" rel="noopener">✉ andrea@avris.it</a>
    </p>
</div>
