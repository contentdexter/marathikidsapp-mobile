// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as Api from '../common/api';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* fetchAllAlphabetsAsync(payload) {
  try {
    // Delay 4 Seconds
    const result = yield Api.fetchAllAlphabets(payload.categoryId);
    // Dispatch Action To Redux Store
    yield put({
      type: 'FETCH_ALL_ALPHABETS_SUCCESS',
      alphabets: result,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Increase Counter Async
export function* watchFetchAlphabetsData() {
  // Take Last Action Only
  yield takeLatest('FETCH_ALL_ALPHABETS', fetchAllAlphabetsAsync);
};
