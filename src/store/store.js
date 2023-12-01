import { configureStore } from '@reduxjs/toolkit'
import { entrySlice } from "./slice/entrySlice/entrySlice"

export const store = configureStore({
    reducer: {
        entries: entrySlice.reducer,

    },
})