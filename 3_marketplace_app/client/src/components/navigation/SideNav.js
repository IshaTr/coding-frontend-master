import React from 'react'
import styled from 'styled-components'

import Flex from '../common/Flex'
import { filters } from '../../utils/helper'

const Wrapper = styled(Flex)`
  padding: 1rem 2rem;
  position: fixed;
  left: 0;
  z-index: 95;
  background: #fafafa;
  width: 18%;
  height: 100%;
  border-right: 1px solid #b0bec5;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #86b817;
`

const renderFilterValues = (values) => (
  <React.Fragment>
    {values.map((value, index) => (
      <p key={`${value}-${index}`}>{value}</p>
    ))}
  </React.Fragment>
)

const SideNav = () => (
  <Wrapper
    justify="center"
    alignItems="flex-start"
    background="#fafafa"
    direction="column"
  >
    {filters.map((filter) => (
      <div key={filter.title}>
        <Title>{filter.title}</Title>
        {renderFilterValues(filter.values)}
      </div>
    ))}
  </Wrapper>
)

export default SideNav
