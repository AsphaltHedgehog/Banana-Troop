//
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reviewsThunk } from "./operations";

interface Reviews {
  id: string;
  userName: string;
  avatarUrl: string;
  review: string;
}
interface AuthState {
  reviews: Reviews;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  reviews: {
    id: "",
    userName: "",
    avatarUrl: "",
    review: "",
  },
  error: null,
  isLoading: false,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reviewsThunk.pending, (state, { payload }) => {
        state.reviews.userName = payload.reviews.userName;
        state.reviews.avatarUrl = payload.reviews.avatarUrl;
        state.reviews.review = payload.reviews.avatarUrl;
        state.error = null;
      })
      .addCase(reviewsThunk.fulfilled, (state, { payload }) => {
        state.reviews = [...state.reviews, ...payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(reviewsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
