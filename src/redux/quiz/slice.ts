import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addQuizesThunk,
  deleteQuizesThunk,
  fetchQuizesThunk,
  updateQuizesThunk,
} from "./operations";

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
      .addCase(addQuizesThunk.fulfilled, (state, { payload }) => {
        state.list.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteQuizesThunk.fulfilled, (state, { payload }) => {
        state.list = state.list.filter((quiz) => quiz._id !== payload);
        state.isLoading = false;
      })

      .addCase(updateQuizesThunk.fulfilled, (state, { payload }) => {
        const updatedQuizeIndex = state.list.findIndex(
          (quiz) => quiz._id === payload._id
        );
        if (updatedQuizeIndex) {
          state.list[updatedQuizeIndex] = {
            ...state.list[updatedQuizeIndex],
            ...payload,
          };
        }
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchQuizesThunk.pending,
          addQuizesThunk.pending,
          deleteQuizesThunk.pending,
          updateQuizesThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchQuizesThunk.rejected,
          addQuizesThunk.rejected,
          deleteQuizesThunk.rejected,
          updateQuizesThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === "string" ? action.payload : null;
        }
      );
  },
});

export const quizesReducer = quizesSlice.reducer;
