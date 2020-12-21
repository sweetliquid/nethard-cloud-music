import { combineReducers } from '@reduxjs/toolkit'
import player from './player/playerReducer'

const reducer = combineReducers({
  player,
})

export type State = ReturnType<typeof reducer>

export default reducer
