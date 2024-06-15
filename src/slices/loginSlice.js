// slices/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('login/fetchTodos', async (data) => {
  const response = await axios.post('/api/user/login', data)
  return response.todos
})

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    status: "",
    error: false,
    errorMessage: "",
    isLogin: false,
  },
  reducers: {
    logout: (state, actions) => {
      state.isLogin = false;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true;
      state.contents = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    });
  }
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
