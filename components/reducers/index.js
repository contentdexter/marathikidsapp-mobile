// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import applicationReducer from './applicationReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  application: applicationReducer
});
// Exports
export default rootReducer;