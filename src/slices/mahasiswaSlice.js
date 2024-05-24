import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMahasiswa = createAsyncThunk('mahasiswa/fetchMahasiswa', async () => {
  const response = await fetch('/api/mahasiswa');
  const data = await response.json();
  return data;
});

const mahasiswaSlice = createSlice({
  name: 'mahasiswa',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMahasiswa.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMahasiswa.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMahasiswa.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default mahasiswaSlice.reducer;
