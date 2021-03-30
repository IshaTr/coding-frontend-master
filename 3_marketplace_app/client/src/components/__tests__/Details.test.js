import React from 'react'
import {fireEvent, screen, render, cleanup} from '@testing-library/react'
import {useSelector, useDispatch} from 'react-redux'
import { createMemoryHistory } from 'history'

import Details from '../Details'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = {
  "id": 0,
  "title": "Title Nr. 0",
  "imageUrl": "https://i.ebayimg.com/00/s/MTAyNFg1NzY=/z/qWYAAOSwm1Vcc6F4/$_72.JPG",
  "description": "Description 0",
  "userId": null
}

describe('<Details />', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => (mockStore))

    const history = createMemoryHistory()
    render(<Details {...history} />)
  })

  afterEach(cleanup)

  it('should render without breaking', () => {
    expect(screen.findByText('Title Nr. 0')).toBeTruthy()
  })

  it('should render dialog on clicking share ad button', () => {
    const shareButton = screen.getByTestId('button-shareAd')
    fireEvent.click(shareButton)

    expect(screen.findByText('Copy link from here')).toBeTruthy()
  })
})
