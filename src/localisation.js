/*
 * It looks like Sapper has no support for i18n (https://github.com/sveltejs/sapper/issues/576),
 * so this solution is quick and dirty (but works!)
 * it would be nice to have eg. dynamic loading of translations
 * similar to https://gitlab.com/Avris/Cake/-/blob/master/src/components/LanguageSwitch.vue
 * but with Svelte & Rollup
 */
import {getQueryVariable} from "./helpers";

import en from './translation/en';
import pl from './translation/pl';
import de from "./translation/de";

export const locales = {
    'en': en,
    'pl': pl,
    'de': de,
}

let currentLocaleMemoise = null;
export const currentLocale = () => {
    if (currentLocaleMemoise !== null) {
        return currentLocaleMemoise;
    }

    return currentLocaleMemoise = (typeof global !== 'undefined' ? global.currentLocale : getQueryVariable('l')) || 'en';
};

export const t = (key) => {
    for (let translations of [locales[currentLocale()], en]) {
        const translatedString = translate(translations, key);
        if (translatedString) {
            return translatedString;
        }
    }

    return '';
};

const translate = (translations, key) => {
    for (let k of key.split('.')) {
        translations = translations[k];
        if (translations === undefined) {
            return '';
        }
    }

    return translations;
};
