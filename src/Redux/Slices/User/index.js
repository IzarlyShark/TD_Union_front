import { createSlice } from '@reduxjs/toolkit'
import { userBuilder } from './thunk'

const initialState = {
    user : null,
    isLoading : false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: userBuilder,
    reducers: {
        setUser(state, action) {
            state = action.payload
        }
    }
})

export const { 
    setUser
 } = userSlice.actions

 export default userSlice.reducer