import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fungsi ambuil data Matkul
export const fetchMatkul = createAsyncThunk(
  "matkul/fetchMatkul",
  async () => {
    const response = await axios.get("/api/matkul");//ambil dari API //alamat api
    const data = await response.data;//dapat respon dari api = data
    return data;//kembalikan data itu
  }
);

export const tambahMatkul = createAsyncThunk(
  "matkul/tambahMatkul",
  async (matkul) => {
    const response = await await axios.post(
      "/api/matkul",
      JSON.stringify(matkul)
    );
    const data = await response.data;
    return data;
  }
);

export const fetchMatkulById = createAsyncThunk(
  "matkul/fetchMatkulById",
  async (id) => {
    const response = await axios.get(`/api/matkul/${id}`);
    return response.data;
  }
);

export const updateMatkul = createAsyncThunk(
  "matkul/updateMatkul",
  async (matkul) => {
    const response = await axios.put(
      `/api/matkul/${matkul.id}`,
      matkul
    );
    return response.data;
  }
);

export const deleteMatkul = createAsyncThunk(
  "matkul/deleteMatkul",
  async (id) => {
    const response = await axios.delete(`/api/matkul/${id}`);
    return response.data;
  }
);

const matkulSlice = createSlice({
  name: "matkul",
  initialState: {
    data: [],
    status: "idle",
    selectedMatkul: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatkul.pending, (state) => { //ambil data matkul dari api
        state.status = "loading";//jika gagal
      })
      .addCase(fetchMatkul.fulfilled, (state, action) => {//ambil data matkul dari api
        state.status = "succeeded";//jika sukses
        state.data = action.payload;
      })
      .addCase(fetchMatkul.rejected, (state) => {//ambil data matkul dari api
        state.status = "failed";//sukses
      })
      .addCase(tambahMatkul.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(fetchMatkulById.fulfilled, (state, action) => {
        state.selectedMatkul = action.payload;
      });
  },
});

export default matkulSlice.reducer;
