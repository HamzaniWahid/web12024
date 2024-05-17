// slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    error: false,
    errorMessage: "",
    isLogin: false,
  },
  reducers: {
    login: (state, actions) => {
      let email = actions.payload.username;
      let password = actions.payload.password;
      if (!email || !password) {
        state.errorMessage = "Please enter email and password";
        return;
      } else if (email != "admin@getsurvey.id" || password != "123") {
        state.errorMessage = "Email atau password salah";
      } else {
        state.username = actions.payload.username;
        state.isLogin = true;
      }
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
