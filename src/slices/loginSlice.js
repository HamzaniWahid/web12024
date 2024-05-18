// slices/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('https:///login', credentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    error: false,
    errorMessage: "",
    isLogin: false,
  },
  reducers: {
    logout: (state, actions) => {
      state.isLogin = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.errorMessage = action.payload.message;
      });
  }
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
