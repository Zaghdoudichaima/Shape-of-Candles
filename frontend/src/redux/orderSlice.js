import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    orders : [],
    auth: false,
    errors: [],
    loading: false,
  }

export const addOrder = createAsyncThunk('order/addOrder', async (data, { rejectWithValue }) => {

    try {
        const res = await axios.post('/order/passorder',data);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.errors);
    }
  });

export const deleteOrder = createAsyncThunk('order/deleteOrder', async (orderId , { rejectWithValue }) => {
   
    try {
      const res = await axios({
        method: "delete",
        url: `/order/deleteorder/${orderId}`,
      })
      return res.data
  
    } catch (error) {
      return rejectWithValue(error.response.data.errors)
    }
  });

  export const getOrders = createAsyncThunk('order/getOrders', async (data, { rejectWithValue }) => {

    try {
        const res = await axios.get('/order/allorders',data);
      return res.data;
   } catch (error) {
      return rejectWithValue(error.response.data.errors);
   }
  });

  const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
    },
  
    extraReducers(builder) {
      builder
  
      
        .addCase(addOrder.pending, (state, { payload }) => {
          state.loading = true;
        })
        .addCase(addOrder.fulfilled, (state, { payload }) => {
          state.orders= payload.order
          state.auth = true
          state.loading = false
        })
        .addCase(addOrder.rejected, (state, { payload }) => {
          state.errors = payload
          state.loading = false
        })


    
        .addCase(getOrders.pending, (state, { payload }) => {
            state.loading = true;
          })
          .addCase(getOrders.fulfilled, (state, { payload }) => {
            state.orders = payload.order
            state.auth = true
            state.loading = false
          })
          .addCase(getOrders.rejected, (state, { payload }) => {
            state.errors = payload
            state.loading = false
          })


          .addCase(deleteOrder.pending, (state, { payload }) => {
            state.loading = true;
          })
          .addCase(deleteOrder.fulfilled, (state, { payload }) => {
            state.auth = true
            state.loading = false
            state.orders=state.orders.filter(order =>order._id !== payload._id)
          })
          .addCase(deleteOrder.rejected, (state, { payload }) => {
            state.errors = payload
            state.loading = false
          });
      }
    })


export default orderSlice.reducer