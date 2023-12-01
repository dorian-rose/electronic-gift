import { createSlice } from '@reduxjs/toolkit'

export const entrySlice = createSlice({

    name: 'entries',
    initialState: {
        entries: [],
        isLoading: false,
        ok: true
    },
    reducers: {
        startLoadingEntries: (state) => {
            state.isLoading = true;
        },
        setEntries: (state, action) => {

            state.isLoading = false;
            state.entries = action.payload.entries;
            state.ok = action.payload.ok;
            state.msg = action.payload.msg;

        }
    }

})

export const { setEntries, startLoadingEntries } = entrySlice.actions