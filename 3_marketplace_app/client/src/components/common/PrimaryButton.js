import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid #86b817;
  background: #86b817;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 40px;
  line-height: 35px;
  padding: 0 1.5rem;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.8px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  outline: none;
  border-radius: 2px;
  transition: all 0.3s ease-out;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 23%);
  margin-bottom: 2rem;
  width: 80%;
  transition: 0.5s all ease-in-out;

  &:hover {
    background: #fff;
    border: 1px solid #b0bec5;
    color: #777;
  }
`

const PrimaryButton = ({ text, handleClick, id }) => (
  <Button onClick={handleClick} data-testid={`button-${id}`}>
    {text}
  </Button>
)

export default PrimaryButton
