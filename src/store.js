// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import counterSlice from "./slices/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    login: loginReducer,
  },
});
