import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../../api'

export const loginThunk = createAsyncThunk('user/login', async (values, { rejectWithValue }) => {
    try {
        const response = await api.login(values)
        return response
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const userBuilder = (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
        state.error = null
    }).addCase(loginThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
    }).addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = 'Ошибка входа'
    })
}