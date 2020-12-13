import { combineReducers } from '@reduxjs/toolkit'
import volume from './volume/volumeReducer'
import progress from './progress/progressReducer'

export default combineReducers({ volume, progress })
