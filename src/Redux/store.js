import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slices/User'
import servicesSlice from './Slices/Services/Services'

export const store = configureStore({
    reducer: {
        user: userSlice,
        // admin: adminSlice,
        services: servicesSlice
    }
})