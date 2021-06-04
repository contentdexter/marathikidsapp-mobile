import * as Config from './config';

export const fetchAllCategory = () => {
    return fetch(`${Config.API_PATH}home-category/app/${Config.APP_ID}`);
}

export const fetchAlphabetDescription = (categoryId, alphabetId) => {
    return fetch(`${Config.API_PATH}category/${categoryId}/alphabet/${alphabetId}`);
}