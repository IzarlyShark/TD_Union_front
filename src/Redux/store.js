import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slices/User'
import servicesSlice from './Slices/Services/Services'
import calcSlice from './Slices/Calc'

export const store = configureStore({
    reducer: {
        user: userSlice,
        // admin: adminSlice,
        services: servicesSlice,
        calc: calcSlice,
    }
})