import { configureStore } from '@reduxjs/toolkit'
import { entrySlice } from "./slice/entrySlice/entrySlice"
import { userSlice } from './slice/userSlice/userSlice'
export const store = configureStore({
    reducer: {
        entries: entrySlice.reducer,
        user: userSlice.reducer

    },
})