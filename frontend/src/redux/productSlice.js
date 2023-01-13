import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products : [],
  auth: false,
  errors: [],
  loading: false,
  
 
}


export const addProduct = createAsyncThunk('product/addProduct', async (data, { rejectWithValue }) => {

  try {
      const res = await axios.post('/product/addproduct',data);
      return res.data;
  } catch (error) {
      return rejectWithValue(error.response.data.errors);
  }
});


export const getProducts = createAsyncThunk('product/getProducts', async (data, { rejectWithValue }) => {

  try {
      const res = await axios.get('/product/getproducts',data);
    return res.data;
 } catch (error) {
    return rejectWithValue(error.response.data.errors);
 }
});


export const updateProduct = createAsyncThunk('product/updateproduct', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.put(`/product/update/${data.id}`,data);
  return res.data;
} catch (error) {
  return rejectWithValue(error.response.data.errors);
}
});


export const deleteProduct = createAsyncThunk('product/deleteproduct', async (productId, { rejectWithValue }) => {

  try {
    const res = await axios.delete(`/product/delete/${productId}`);
  return res.data;
} catch (error) {
  return rejectWithValue(error.response.errors);
}
});


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },

  extraReducers(builder) {
    builder

    
      .addCase(addProduct.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.products= payload.product
        state.auth = true
        state.loading = false
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        state.errors = payload
        state.loading = false
      })


      .addCase(getProducts.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload.product
        state.auth = true
        state.loading = false
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.errors = payload
        state.loading = false
      })


      .addCase(updateProduct.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.auth = true
        state.products.find(product => product._id === payload._id)
        state.message = payload.message
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.errors = payload
        state.loading = false
      })


      .addCase(deleteProduct.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.auth = true
        state.loading = false
        state.products=state.products.filter(product =>product._id !== payload._id)
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.errors = payload
        state.loading = false
      });
  }
})

export default productSlice.reducer