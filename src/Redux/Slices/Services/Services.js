import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    serviceActiveTag: null,
};

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setServiceActiveTag: (state, action) => {
            state.serviceActiveTag = action.payload;
        },
    },
});

export const { setServiceActiveTag, setServiceRef } = servicesSlice.actions;

export default servicesSlice.reducer;