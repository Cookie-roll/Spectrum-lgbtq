// https://stackoverflow.com/a/32480941
export const convertBase = function (value, fromBase, toBase) {
    const range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
    const fromRange = range.slice(0, fromBase);
    const toRange = range.slice(0, toBase);

    let decValue = (value + '').split('').reverse().reduce(function (carry, digit, index) {
        if (fromRange.indexOf(digit) === -1) {
            throw new Error(`Invalid digit "${digit}" for base ${fromBase}.`);
        }

        return carry += fromRange.indexOf(digit) * (Math.pow(fromBase, index));
    }, 0);

    let newValue = '';
    while (decValue > 0) {
        newValue = toRange[decValue % toBase] + newValue;
        decValue = (decValue - (decValue % toBase)) / toBase;
    }

    return newValue || '0';
};

import twemoji from 'twemoji';

export const emoji = ($el) => {
    twemoji.parse($el);
};

import en from './translation/en';

export const t = (key) => {
    let t = en;
    for (let k of key.split('.')) {
        t = t[k];
        if (t === undefined) {
            return '';
        }
    }

    return t;
};
