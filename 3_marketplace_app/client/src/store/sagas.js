import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from './types'

import { fetchAds, fetchAdDetail } from './requests'

function* fetchAdsSaga() {
  try {
    const response = yield call(fetchAds)
    const { data } = response

    yield put({
      type: types.FETCH_ADS_SUCCESS,
      payload: data
    })
  } catch (error) {
    yield put({
      type: types.FETCH_ADS_ERROR,
      payload: error.message
    })
  }
}

function* fetchAdDetailSaga(action) {
  try {
    const response = yield call(fetchAdDetail, action.payload)

    yield put({
      type: types.FETCH_AD_DETAIL_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: types.FETCH_AD_DETAIL_ERROR,
      payload: error.message
    })
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(types.FETCH_ADS_REQUEST, fetchAdsSaga),
    yield takeLatest(types.FETCH_AD_DETAIL_REQUEST, fetchAdDetailSaga)
  ])
}
