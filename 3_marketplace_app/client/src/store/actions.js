import * as types from './types'

export const fetchAdList = () => ({
  type: types.FETCH_ADS_REQUEST
})

export const fetchAdDetail = (adId) => ({
  type: types.FETCH_AD_DETAIL_REQUEST,
  payload: adId
})
