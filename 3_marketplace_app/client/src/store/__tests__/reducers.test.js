import reducer from '../reducers'
import * as types from '../types'

const initialState = {
  allAds: [],
  activeAdDetail: {
    id: null,
    title: null,
    imageUrl: null,
    userId: null
  },
  starredAds: [],
  error: null,
  loading: false
}

describe('Reducers', () => {
  it('should update state correctly for FETCH_ADS_REQUEST', () => {
    const state = reducer(
      { ...initialState },
      { type: types.FETCH_ADS_REQUEST }
    )

    expect(state).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('should update state correctly for FETCH_ADS_SUCCESS', () => {
    const adList = [
      {
        id: 1,
        title: 'Title Nr. 1',
        imageUrl:
          'https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/Zb0AAOSw8ihcc6Li/$_72.JPG',
        description: 'Description 1',
        userId: null
      },
      {
        id: 2,
        title: 'Title Nr. 2',
        imageUrl:
          'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/lHoAAOSwaqFehv2n/$_72.JPG',
        description: 'Description 2',
        userId: null
      },
      {
        id: 3,
        title: 'Title Nr. 3',
        imageUrl:
          'https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/2WoAAOSwgaZehwAj/$_72.JPG',
        description: 'Description 3',
        userId: null
      }
    ]

    const state = reducer(
      { ...initialState },
      { type: types.FETCH_ADS_SUCCESS, payload: adList }
    )

    expect(state).toEqual({
      ...initialState,
      allAds: adList
    })
  })

  it('should update state correctly for FETCH_ADS_ERROR', () => {
    const state = reducer(
      { ...initialState },
      { type: types.FETCH_ADS_ERROR, payload: 'Random error' }
    )

    expect(state).toEqual({
      ...initialState,
      error: 'Random error'
    })
  })

  it('should update state correctly for FETCH_AD_DETAIL_REQUEST', () => {
    const state = reducer(
      { ...initialState },
      { type: types.FETCH_AD_DETAIL_REQUEST }
    )

    expect(state).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('should update state correctly for FETCH_AD_DETAIL_SUCCESS', () => {
    const adDetail = {
      id: 1,
      title: 'Title Nr. 1',
      imageUrl:
        'https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/Zb0AAOSw8ihcc6Li/$_72.JPG',
      description: 'Description 1',
      userId: null
    }

    const state = reducer(
      { ...initialState },
      { type: types.FETCH_AD_DETAIL_SUCCESS, payload: adDetail }
    )

    expect(state).toEqual({
      ...initialState,
      activeAdDetail: adDetail
    })
  })

  it('should update state correctly for FETCH_AD_DETAIL_ERROR', () => {
    const state = reducer(
      { ...initialState },
      { type: types.FETCH_AD_DETAIL_ERROR, payload: 'Random error' }
    )

    expect(state).toEqual({
      ...initialState,
      error: 'Random error'
    })
  })
})
