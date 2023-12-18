import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'user',
    initialState: { uid: "" },
    reducers: {

        setUser: (state, action) => {

            state.uid = action.payload.uid;


        }
    }

})

export const { setUser } = userSlice.actions