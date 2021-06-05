import * as Config from './config';

export const getCurrentAlphabetIndex = (alphabetId, alphabets) => {
    return alphabets.findIndex(item => item.id === alphabetId);
}

export const getCurrentAlphabet = (alphabetId) => {
    let index = getCurrentAlphabetIndex(alphabetId);
    return Config.MARATHI_ALPHABETS_SWAR[index];
}

export const prepareNextAlphabetIndex = (alphabetId, alphabets) => {
    let currentAlphabetIndex = getCurrentAlphabetIndex(alphabetId, alphabets);
    if (currentAlphabetIndex === Config.MARATHI_ALPHABETS_SWAR.length - 1) {
        return alphabets[0];
    }

    currentAlphabetIndex++;

    return alphabets[currentAlphabetIndex];
}

export const preparePrevAlphabetIndex = (alphabetId, alphabets) => {
    let currentAlphabetIndex = getCurrentAlphabetIndex(alphabetId, alphabets);
    if (currentAlphabetIndex === 0) {
        return alphabets[alphabets.length - 1];
    }

    currentAlphabetIndex--;

    return alphabets[currentAlphabetIndex];
}