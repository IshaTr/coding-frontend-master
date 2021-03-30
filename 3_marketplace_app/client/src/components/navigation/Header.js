import React from 'react'
import styled from 'styled-components'

import Flex from '../common/Flex'
import Logo from '../../utils/images/ebay-logo.png'

const Wrapper = styled(Flex)`
  padding: 1.2rem 2rem;
  position: fixed;
  z-index: 99;
  background: #fafafa;
  width: 100%;
  box-shadow: 0px 11px 8px -15px #111;
`

const LogoWrapper = styled.div`
  img {
    width: 120px;
    height: 28px;
  }
`

const Header = (props) => (
  <Wrapper justify="space-between" alignItems="center" background="#fafafa">
    <LogoWrapper>
      <img src={Logo} alt='Ebay'></img>
    </LogoWrapper>
  </Wrapper>
)

export default Header
