import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { between } from 'utils/Math'

const initialState = 50

function volumeRange(volume: number) {
  return between(volume, { min: 0, max: 100 })
}

const slice = createSlice({
  name: 'volume',
  initialState,
  reducers: {
    increaseVolume(state, action?: PayloadAction<{ step: number }>) {
      return volumeRange(state - (action?.payload.step ?? 1))
    },
    decreaseVolume(state, action?: PayloadAction<{ step: number }>) {
      return volumeRange(state + (action?.payload.step ?? 1))
    },
    setVolume(_state, action: PayloadAction<{ volume: number }>) {
      return volumeRange(action.payload.volume)
    },
  },
})

export const { increaseVolume, decreaseVolume } = slice.actions

const volume = slice.reducer
export default volume
