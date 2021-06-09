// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import { 
  watchFetchAllphabetsData, 
  watchFetchSubCategoryData,
  watchFetchAllCategoryData
 } from './applicationSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchFetchAllphabetsData),
    fork(watchFetchSubCategoryData),
    fork(watchFetchAllCategoryData)
  ]);
};