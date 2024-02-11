import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { reviewsThunk } from "./operations";
interface Review {
  id: string;
  userName: string;
  avatarUrl: string;
  review: string;
}
interface AuthState {
  review: Review;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  review: {
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
      .addCase(reviewsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        reviewsThunk.fulfilled,
        (state, { payload }: PayloadAction<ApiResponse>) => {
          state.review = payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        reviewsThunk.rejected,
        (state, { payload }: PayloadAction<ApiResponse>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const reviewsReducer = reviewsSlice.reducer;
