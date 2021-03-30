import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import './App.css'
import Home from './components/Home'

import sagas from './store/sagas'
import reducer from './store/reducers'
import initialState from './store/initialState'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// import Ads from './components/ads'
// import Details from './components/details'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

const ads = [
  {
    id: 0,
    title: 'Title Nr. 0',
    imageUrl:
      'https://i.ebayimg.com/00/s/MTAyNFg1NzY=/z/qWYAAOSwm1Vcc6F4/$_72.JPG',
    description: 'Description 0',
    userId: null
  }
]

const App = () =>  (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
