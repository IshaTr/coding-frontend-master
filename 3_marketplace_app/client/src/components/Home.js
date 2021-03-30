import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Ads from './Ads'
import Details from './Details'
import Header from './navigation/Header'
import SideNav from './navigation/SideNav'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Home = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <SideNav />
      <Router>
        <Switch>
          <Route exact path="/details/:id" component={Details} />
          <Route path="/" component={Ads} />
        </Switch>
      </Router>
    </Wrapper>
  </React.Fragment>
)

export default Home
