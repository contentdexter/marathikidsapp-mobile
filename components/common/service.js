export const getCurrentAlphabetIndex = (alphabetId, alphabets) => {
    return alphabets.findIndex(item => item.id === alphabetId);
}

export const prepareNextContentIndex = (alphabetId, alphabets) => {
    let currentAlphabetIndex = getCurrentAlphabetIndex(alphabetId, alphabets);
    if (currentAlphabetIndex === alphabets.length - 1) {
        return alphabets[0];
    }

    currentAlphabetIndex++;

    return alphabets[currentAlphabetIndex];
}

export const preparePrevContentIndex = (alphabetId, alphabets) => {
    let currentAlphabetIndex = getCurrentAlphabetIndex(alphabetId, alphabets);
    if (currentAlphabetIndex === 0) {
        return alphabets[alphabets.length - 1];
    }

    currentAlphabetIndex--;

    return alphabets[currentAlphabetIndex];
}

export const getCurrentAlphabet = (alphabetId, alphabets) => {
    let currentAlphabetIndex = getCurrentAlphabetIndex(alphabetId, alphabets);

    return alphabets[currentAlphabetIndex];
}