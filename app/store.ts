import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import reducer, { State } from './reducer'

const store = configureStore({ reducer })

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer', () => {
    const newRootReducer = require('./reducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, State, unknown, Action<string>>

export default store
