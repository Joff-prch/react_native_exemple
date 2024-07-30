import { Track } from '@/src/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type PlayerState = {
  track?: Track
}

const initialState: PlayerState = {
  track: undefined,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<Track>) => {
      state.track = action.payload
    },
  },
})

export const { setTrack } = playerSlice.actions

export default playerSlice.reducer
