import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalMilisecond: 0,
  currentMilisecond: 0,
}

const slice = createSlice({
  name: 'progress',
  initialState,
  reducers: {},
})

export const {} = slice.actions

const progress = slice.reducer
export default progress
