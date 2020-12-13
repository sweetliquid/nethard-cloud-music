import { combineReducers } from '@reduxjs/toolkit'
import volume from './volume/reducer'
import progress from './progress/reducer'

export default combineReducers({ volume, progress })
