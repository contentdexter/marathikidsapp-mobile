// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import { watchFetchAlphabetsData } from './alphabetsSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchFetchAlphabetsData),
  ]);
};