import * as types from './types'

import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ADS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        ads: action.payload.data
      }

    case types.FETCH_AD_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_AD_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        activeAdDetail: action.payload.data
      }

    case types.FETCH_AD_DETAIL_ERROR:
    case types.FETCH_ADS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default reducer
