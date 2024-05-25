import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../features/song/songSlice'

export const store = configureStore({
  reducer: {
    song: songReducer,
  },
})