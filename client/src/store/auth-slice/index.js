import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);
export const loginUser = createAsyncThunk("auth/login", async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/v1/auth/login",
    formData,
    { withCredentials: true }
  );
  return response.data;
});
export const checkAuth = createAsyncThunk("auth/checkauth", async () => {
  const response = await axios.get(
    "http://localhost:5000/api/v1/auth/checkauth",
    {
      withCredentials: true,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Expires: "0",
      },
    }
  );
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = !action.payload.success ? false : true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkAuth.pending, (state, action) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
