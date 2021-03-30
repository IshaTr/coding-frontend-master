import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Dialog from '../Dialog'

describe('<Dialog />', () => {
  const handleClick = jest.fn()
  const title = 'some-title'
  const message = 'random message'

  beforeEach(() => {
    render(<Dialog title={title} message={message} handleClick={handleClick} />)
  })

  it('renders the children', () => {
    expect(screen.findByText('some-title')).toBeTruthy()
  })

  it('should close dialog by clicking on close btn', () => {
    const element = screen.getByTestId('close')
    fireEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
