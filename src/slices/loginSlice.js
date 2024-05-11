// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: "",
    isLogin: false
  },
  reducers: {
    login: state => {
      console.log("dispatch berhasil");
      state.username = "Admin";
      state.isLogin = true;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;