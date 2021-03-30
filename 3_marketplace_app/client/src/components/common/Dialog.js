import React from 'react'
import styled from 'styled-components'

import Flex from './Flex'

const Overlay = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`

const DialogWrapper = styled.div`
  font-size: 16px;
  background: #fff;
  border-radius: 4px;
  height: 150px;
  width: 50%;
  padding: 2rem;
`

const Footer = styled(Flex)`
  width: 100%;
  height: 20px;
  position: relative;
  top: 4rem;
`

const CloseButton = styled.div`
  color: #86b817;
  font-weight: 500;
  border: 1px solid #777;
  border-radius: 2px;
`

const Dialog = ({ title, message, handleClick }) => (
  <Overlay justify="center" alignItems="center" onClick={handleClick}>
    <DialogWrapper>
      <span>{title}</span>
      <p>{message}</p>
      <Footer justify="flex-end">
        <CloseButton
          data-testid="close"
          onClick={(event) => {
            event.stopPropagation()
            handleClick()
          }}
        >
          Close
        </CloseButton>
      </Footer>
    </DialogWrapper>
  </Overlay>
)

export default Dialog
