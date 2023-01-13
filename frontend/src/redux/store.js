import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import productSlice from './productSlice'
import userSlice from './userSlice'
import orderSlice from './orderSlice'

const store=configureStore({
    reducer:{
       auth:authSlice,
       product:productSlice,
       user:userSlice,
       order:orderSlice
    }
})
export default store