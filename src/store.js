import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Slices/cartSlice'
import userReducer from './Slices/userSlice'

export const store = configureStore({
    reducer:{
        cart : cartReducer,
        user : userReducer
    }
})