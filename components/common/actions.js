import * as Constants from './constants';

export const fetchAllCategory = () => {
    return {
        type: Constants.FETCH_ALL_CATEGORY,
    }
}

export const fetchAllAlphabets = (categoryId) => {
    return {
        type: Constants.FETCH_ALL_ALPHABETS,
        categoryId: categoryId
    }
}

export const fetchAllSubCategory = (categoryId) => {
    return {
        type: Constants.FETCH_ALL_SUB_CATEGORY,
        categoryId: categoryId
    }
}

export const showLoader = () => {
    return {
        type: Constants.SET_LOADER_TRUE,
    }
}

export const hideLoader = () => {
    return {
        type: Constants.SET_LOADER_FALSE
    }
}

export const setCategory = (category) => {
    return {
        type: Constants.FETCH_ALL_CATEGORY_SUCCESS,
        category: category,
    }
}