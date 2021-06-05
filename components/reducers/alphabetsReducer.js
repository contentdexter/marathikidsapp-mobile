// Initial State
const initialState = {
    alphabets: [],
  };
  // Redux: Counter Reducer
  const alphabetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ALL_ALPHABETS_SUCCESS':
        return {
          ...state,
          alphabets: action.alphabets
        }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default alphabetReducer;