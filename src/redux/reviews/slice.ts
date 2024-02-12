import { createSlice } from "@reduxjs/toolkit";

import { reviewsThunk } from "./operations";
interface Review {
  _id: string;
  userName: string;
  avatarUrl: string;
  review: string;
  createdAt: string;
  updatedAt: string;
}
interface AuthState {
  review: Review[];
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  review: [
    {
      _id: "",
      userName: "",
      avatarUrl: "",
      review: "",
      createdAt: "",
      updatedAt: "",
    },
  ],
  error: null,
  isLoading: false,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reviewsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(reviewsThunk.fulfilled, (state, { payload }) => {
        state.review = payload;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(reviewsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
