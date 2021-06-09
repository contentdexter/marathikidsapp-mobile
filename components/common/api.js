import * as Config from './config';

export const fetchAllCategory = () => {
    return fetch(`${Config.API_PATH}home-category/app/${Config.APP_ID}`).then(result => result.json()).then(res => res);
}

export const fetchAllAlphabets = (categoryId) => {
    return fetch(`${Config.API_PATH}category/${categoryId}`).then(result => result.json()).then(res => res);
}

export const fetchAlphabetDescription = (categoryId, alphabetId) => {
    return fetch(`${Config.API_PATH}category/${categoryId}/alphabet/${alphabetId}`);
}

export const fetchAllSubCategory = (categoryId) => {
    return fetch(`${Config.API_PATH}category/${categoryId}/sub-category`).then(result => result.json()).then(res => res);
}