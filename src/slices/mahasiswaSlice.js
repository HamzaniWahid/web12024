import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMahasiswa = createAsyncThunk(
  "mahasiswa/fetchMahasiswa",
  async () => {
    const response = await axios.get("/api/mahasiswa");
    const data = await response.data;
    return data;
  }
);

export const tambahMahasiswa = createAsyncThunk(
  "mahasiswa/tambahMahasiswa",
  async (mahasiswa) => {
    const response = await await axios.post(
      "/api/mahasiswa",
      JSON.stringify(mahasiswa)
    );
    const data = await response.data;
    return data;
  }
);

export const fetchMahasiswaById = createAsyncThunk(
  "mahasiswa/fetchMahasiswaById",
  async (id) => {
    const response = await axios.get(`/api/mahasiswa/${id}`);
    return response.data;
  }
);

export const updateMahasiswa = createAsyncThunk(
  "mahasiswa/updateMahasiswa",
  async (mahasiswa) => {
    const response = await axios.put(
      `/api/mahasiswa/${mahasiswa.id}`,
      mahasiswa
    );
    return response.data;
  }
);

export const deleteMahasiswa = createAsyncThunk(
  "mahasiswa/deleteMahasiswa",
  async (id) => {
    const response = await axios.delete(`/api/mahasiswa/${id}`);
    return response.data;
  }
);

const mahasiswaSlice = createSlice({
  name: "mahasiswa",
  initialState: {
    data: [],
    status: "idle",
    selectedMahasiswa: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMahasiswa.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMahasiswa.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchMahasiswa.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(tambahMahasiswa.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(fetchMahasiswaById.fulfilled, (state, action) => {
        state.selectedMahasiswa = action.payload;
      });
  },
});

export default mahasiswaSlice.reducer;
