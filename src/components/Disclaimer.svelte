<script>
    import { emoji } from '../helpers';
    import { t } from '../localisation';
</script>

<div class="alert">
    <strong>{t('disclaimer.header')}</strong>
    <p>{t('disclaimer.author')}</p>
    <p>{t('disclaimer.issues')}</p>
    <p use:emoji>{@html t('disclaimer.examples')}</p>
</div>
