import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

export const getScrollPostionData = (state: StateSchema) => state.scrollPositionSaver.scroll

export const getScrollPostionDataByPath = createSelector(
  getScrollPostionData,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
)
