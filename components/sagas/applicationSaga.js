// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as Api from '../common/api';
import * as Constants from './../common/constants';
import * as Actions from './../common/actions';

// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* fetchAllCategoryAsync() {
  try {
    // Delay 4 Seconds
    const result = yield Api.fetchAllCategory();
    // Dispatch Action To Redux Store
    yield put(Actions.setCategory(result));
    yield put(Actions.hideLoader());
  }
  catch (error) {
    console.log(error);
  }
};

function* fetchAllAlphabetsAsync(payload) {
  try {
    // Delay 4 Seconds
    const result = yield Api.fetchAllAlphabets(payload.categoryId);
    // Dispatch Action To Redux Store
    yield put({
      type: Constants.FETCH_ALL_ALPHABETS_SUCCESS,
      alphabets: result,
    });
  }
  catch (error) {
    console.log(error);
  }
};

function* fetchAllSubCategoryAsync(payload) {
  try {
    // Delay 4 Seconds
    const result = yield Api.fetchAllSubCategory(payload.categoryId);
    // Dispatch Action To Redux Store
    yield put({
      type: Constants.FETCH_ALL_SUBCATEGORY_SUCCESS,
      subCategory: result,
    });
  }
  catch (error) {
    console.log(error);
  }
};

// Watcher: Increase Counter Async
export function* watchFetchAllCategoryData() {
  yield takeLatest(Constants.FETCH_ALL_CATEGORY, fetchAllCategoryAsync);
}

export function* watchFetchAllphabetsData() {
  // Take Last Action Only
  yield takeLatest(Constants.FETCH_ALL_ALPHABETS, fetchAllAlphabetsAsync);
};

export function* watchFetchSubCategoryData() {
  // Take Last Action Only
  yield takeLatest(Constants.FETCH_ALL_SUB_CATEGORY, fetchAllSubCategoryAsync);
};
