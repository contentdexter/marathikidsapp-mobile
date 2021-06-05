// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import alphabetsReducer from './alphabetsReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  alphabets: alphabetsReducer,
});
// Exports
export default rootReducer;