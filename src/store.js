import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'


export const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
