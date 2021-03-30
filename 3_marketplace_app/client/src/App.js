import React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import './App.css'
import Home from './components/Home'

import sagas from './store/sagas'
import reducer from './store/reducers'
import initialState from './store/initialState'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
