import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import PrimaryButton from '../PrimaryButton'

describe('<PrimaryButton />', () => {
  const handleClick = jest.fn()
  const text = 'some-text'

  beforeEach(() => {
    render(<PrimaryButton text={text} handleClick={handleClick} id='message' />)
  })

  it('renders the children', () => {
    expect(screen.findByText('some-text')).toBeTruthy()
  })

  it('should call handleClick by clicking on the btn', () => {
    const element = screen.getByTestId('button-message')
    fireEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
