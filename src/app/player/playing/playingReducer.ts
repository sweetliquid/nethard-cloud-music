import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const playing = createSlice({
  name: 'playing',
  initialState,
  reducers: {
    toggle(state) {
      return !state
    },
  },
})

export const { toggle } = playing.actions

export default playing.reducer
