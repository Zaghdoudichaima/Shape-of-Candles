import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users:[],
    auth: true,
    errors: [],
    loading: false, 
}

export const getAllUsers=createAsyncThunk('user/getAllUsers',async(data,{rejectWithValue})=>{
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const res=await axios.get("/user/getusers",config,data)
        return res.data
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})

export const updateUser = createAsyncThunk('user/updateUser', async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`/user/updateuser/${data.id}`,data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.errors);
  }
  });

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    },

    extraReducers(builder) {
        builder
        .addCase(getAllUsers.pending, (state, { payload }) => {
            state.loading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, { payload }) => {
            state.users = payload
            state.auth = true
            state.loading = false
        })
        .addCase(getAllUsers.rejected, (state, { payload }) => {
            state.errors = payload
            state.loading = false
        })
        .addCase(updateUser.pending, (state, { payload }) => {
            state.loading = true
          })
          .addCase(updateUser.fulfilled, (state, { payload }) => {
            state.auth = true
            state.users.find(user => user._id === payload._id)
            state.message = payload.message
          })
          .addCase(updateUser.rejected, (state, { payload }) => {
            state.errors = payload
            state.loading = false
          })
    
    }
})

export default userSlice.reducer