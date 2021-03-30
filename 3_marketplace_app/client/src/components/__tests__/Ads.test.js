import React from 'react'
import { fireEvent, screen, render, cleanup } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import { MemoryRouter } from 'react-router-dom'

import Ads from '../Ads'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = [
  {
    id: 0,
    title: 'Title Nr. 0',
    imageUrl:
      'https://i.ebayimg.com/00/s/MTAyNFg1NzY=/z/qWYAAOSwm1Vcc6F4/$_72.JPG',
    description: 'Description 0',
    userId: null
  },
  {
    id: 1,
    title: 'Title Nr. 1',
    imageUrl:
      'https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/Zb0AAOSw8ihcc6Li/$_72.JPG',
    description: 'Description 1',
    userId: null
  }
]

describe('<Ads />', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => mockStore)

    render(<Ads />, { wrapper: MemoryRouter })
  })

  afterEach(cleanup)

  it('should render without breaking', () => {
    expect(screen.findByText('Title Nr. 1')).toBeTruthy()
  })

  it('should navigate to details page on clicking an ad', () => {
    const element = screen.getByTestId('navigateToAd-1')

    fireEvent.click(element)
    expect(screen.findByText('Write a message')).toBeTruthy()
  })
})
