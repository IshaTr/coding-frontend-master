import React, {useEffect} from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Ads from './Ads'
import Details from './Details'

const Home = (props) => (
  <Router>
    <Switch>
      <Route exact path="/details" component={Details} />
      <Route
        path="/"
        component={(props) => <Ads {...props} />}
      />
    </Switch>
  </Router>
)

export default Home
