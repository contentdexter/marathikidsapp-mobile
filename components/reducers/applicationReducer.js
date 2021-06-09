import * as Constants from './../common/constants';

// Initial State
const initialState = {
    category: [],
    alphabets: [],
    subCategory: [],
    loader: false
  };
  // Redux: Counter Reducer
  const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case Constants.FETCH_ALL_ALPHABETS_SUCCESS:
        return {
          ...state,
          alphabets: action.alphabets
        }
      case Constants.FETCH_ALL_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          subCategory: action.subCategory
        }
      case Constants.FETCH_ALL_CATEGORY_SUCCESS:
        return {
          ...state,
          category: action.category
        }
      case Constants.SET_LOADER_FALSE:
        return {
          ...state,
          loader: false
        }
      case Constants.SET_LOADER_TRUE:
        return {
          ...state,
          loader: true
        }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default applicationReducer;