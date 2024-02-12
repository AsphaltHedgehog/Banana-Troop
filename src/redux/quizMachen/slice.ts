import {
  createSlice,
  // PayloadAction,
  isAnyOf
} from "@reduxjs/toolkit";
import {
  getQuizById,
} from "./operations";

export type Answers = {
  _id?: string;
  descr?: string;
};

export type Questions = {
  _id?: string;
  quiz?: string;
  time?: string;
  descr?: string;
  answers?: Answers[];
};

export type Quiz = {
  _id?: string;
  theme?: string;
  category?: string;
  background?: string;
  ageGroup?: "children" | "adults";
  ratingQuantity?: number;
  rating?: number;
  finished?: number;
  questions?: Questions[];
};

type QuizState = {
  quiz: Quiz;
  isLoading: boolean;
  error: string | null;
};

const initialState: QuizState = {
  quiz: {},
  isLoading: false,
  error: null,
};

const quizMachenSlice = createSlice({
  name: "quizMachen",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getQuizById.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getQuizById.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload === "string" ? action.payload : null;
        }
      );
  },
});

export const quizMachenReducer = quizMachenSlice.reducer;
