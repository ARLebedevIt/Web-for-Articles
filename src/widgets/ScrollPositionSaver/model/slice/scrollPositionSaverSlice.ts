import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ScrollPositionSaverSchema } from '../types/ScrollPositionSaver'

const initialState: ScrollPositionSaverSchema = {
  scroll: {},
}

export const scrollPositionSaverSlice = createSlice({
  name: 'scrollPositionSaverSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position
    },
  },
})

export const { actions: scrollPositionSaverActions } = scrollPositionSaverSlice
export const { reducer: scrollPositionSaverReducer } = scrollPositionSaverSlice
