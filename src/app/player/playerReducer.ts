import { combineReducers, createSlice } from '@reduxjs/toolkit'
import volume from './volume/volumeReducer'
import progress from './progress/progressReducer'
import playing from './playing/playingReducer'

export default combineReducers({ volume, progress, playing })
