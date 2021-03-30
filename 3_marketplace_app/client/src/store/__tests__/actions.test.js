import * as actions from '../actions'
import * as types from '../types'
describe('Actions', () => {
  it('fetchAdList', () => {
    const expectedAction = {
      type: types.FETCH_ADS_REQUEST
    }

    expect(actions.fetchAdList()).toEqual(expectedAction)
  })

  it('fetchAdDetail', () => {
    const id = 'Random-id'
    const expectedAction = {
      type: types.FETCH_AD_DETAIL_REQUEST,
      payload: id
    }

    expect(actions.fetchAdDetail(id)).toEqual(expectedAction)
  })
})
