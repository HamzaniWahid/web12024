// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    // Tambahkan reducers lainnya di sini jika diperlukan
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
