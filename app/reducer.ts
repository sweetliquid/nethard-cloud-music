import { combineReducers } from '@reduxjs/toolkit'
import volume from 'features/volume/reducer'

const reducer = combineReducers({
  volume,
})

export type State = ReturnType<typeof reducer>

export default reducer
