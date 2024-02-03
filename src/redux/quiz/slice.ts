import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchQuizesThunk } from "./operations";

export type Quiz = {
  theme: string;
  category: {
    $oid: string;
  };
  background: string;
  ageGroup: string;
  _id: string;
  ratingQuantity: number;
  rating: number;
  finished: number;
};

export type QuizState = {
  list: Quiz[];
  isLoading: boolean;
  error: string | null;
};

const initialState: QuizState = {
  list: [],
  isLoading: false,
  error: null,
};

const quizesSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizesThunk.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchQuizesThunk.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchQuizesThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : null;
      });
  },
});

export const quizesReducer = quizesSlice.reducer;
