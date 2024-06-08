import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await axios.get("/api/user");
    const data = await response.data;
    return data;
  }
);

export const tambahUser = createAsyncThunk(
  "user/tambahUser",
  async (user) => {
    const response = await await axios.post(
      "/api/user",
      JSON.stringify(user)
    );
    const data = await response.data;
    return data;
  }
);

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id) => {
    const response = await axios.get(`/api/user/${id}`);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    const response = await axios.put(
      `/api/user/${user.id}`,
      user
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id) => {
    const response = await axios.delete(`/api/user/${id}`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    selectedUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(tambahUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      });
  },
});

export default userSlice.reducer;
