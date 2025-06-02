import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formType: 'pallet',
}

const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        setFormType: (state, action) => {
            state.formType = action.payload
        }
    }
})

export const { setFormType } = calcSlice.actions

export default calcSlice.reducer