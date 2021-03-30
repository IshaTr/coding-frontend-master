import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as types from './types'

import {fetchAds, fetchAdDetail} from './requests'

function* fetchAdsSaga() {
  try {
    const response = yield call(fetchAds)

    yield put({
      type: types.FETCH_ADS_SUCCESS,
      data: response
    })
    console.log(response)
  } catch (error) {
    yield put({
      type: types.FETCH_ADS_ERROR,
      error
    })
  }
}

function* fetchAdDetailSaga(action) {
  try {
    const response = yield call(fetchAdDetail, action.payload.id)

    yield put({
      type: types.FETCH_AD_DETAIL_SUCCESS,
      data: response
    })
  } catch (error) {
    yield put({
      type: types.FETCH_AD_DETAIL_ERROR,
      error
    })
  }
}


export default function* rootSaga() {
  yield all([
    yield takeLatest(types.FETCH_ADS_REQUEST, fetchAdsSaga),
    yield takeLatest(types.FETCH_AD_DETAIL_REQUEST, fetchAdDetailSaga)
  ])
}