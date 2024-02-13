import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { reviewsPostThunk, reviewsThunk } from "./operations";
interface Review {
  _id: string;
  userName: string;
  avatarUrl: string;
  rating?: string;
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
      rating: "",
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
      .addCase(reviewsThunk.fulfilled, (state, { payload }) => {
        state.review = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(reviewsPostThunk.fulfilled, (state, { payload }) => {
        state.review.push(payload);
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(reviewsThunk.rejected, reviewsPostThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload as string;
        }
      )
      .addMatcher(
        isAnyOf(reviewsThunk.pending, reviewsPostThunk.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      );
  },
});

export const reviewsReducer = reviewsSlice.reducer;
