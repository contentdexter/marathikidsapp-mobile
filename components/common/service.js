import * as Config from './config';

export const getCurrentAlphabetIndex = (alphabetId) => {
    return Config.MARATHI_ALPHABETS_SWAR.findIndex(item => item.key === alphabetId);
}

export const prepareNextAlphabetIndex = (alphabetId) => {
    let currentAlphabetIndex = getCurrentAlphabetIndex(alphabetId);
    if (currentAlphabetIndex === Config.MARATHI_ALPHABETS_SWAR.length - 1) {
        return Config.MARATHI_ALPHABETS_SWAR[0];
    }

    currentAlphabetIndex++;

    return Config.MARATHI_ALPHABETS_SWAR[currentAlphabetIndex];
}

export const preparePrevAlphabetIndex = (alphabetId) => {
    let currentAlphabetIndex = getCurrentAlphabetIndex(alphabetId);
    if (currentAlphabetIndex === 0) {
        return Config.MARATHI_ALPHABETS_SWAR[Config.MARATHI_ALPHABETS_SWAR.length - 1];
    }

    currentAlphabetIndex--;

    return Config.MARATHI_ALPHABETS_SWAR[currentAlphabetIndex];
}