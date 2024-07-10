// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import counterSlice from "./slices/counterSlice";
import mahasiswaSlice from "./slices/mahasiswaSlice";
import userSlice from "./slices/userSlice";
import matkulSlice from "./slices/matkulSlice";
import fakultasSlice from "./slices/fakultasSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    login: loginReducer,
    mahasiswa: mahasiswaSlice,
    user: userSlice,
    matkul: matkulSlice,
    fakultas: fakultasSlice,
  },
});
