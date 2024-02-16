import {
  createSlice,
  // PayloadAction,
  isAnyOf
} from "@reduxjs/toolkit";
import {
  getQuizByIdThunk,
} from "./operations";

export type Answers = {
  _id: string;
  descr: string;
};

export type Questions = {
  _id: string;
  quiz: string;
  time: string;
  descr: string;
  validAnswer: string
  imageUrl: string;
  type: "true-or-false" | "full-text";
  answers: Answers[];
};

export type Quiz = {
  _id: string;
  theme: string;
  category: string;
  background  : string;
  ageGroup: "children" | "adults";
  ratingQuantity: number;
  rating: number;
  finished: number;
  questions: Questions[];  
};

type QuizState = {
  quiz: Quiz;
  isLoading: boolean;
  error: string | null;
};

const initialState: QuizState = {
  quiz: {
    _id: '',
    theme: '',
    category: '',
    background: '',
    ageGroup: 'children',
    ratingQuantity: 0,
    rating: 0,
    finished: 0,
    questions: [{
      _id: '',
      quiz: '',
      time: '',
      descr: '',
      validAnswer: '',
      imageUrl: '',
      type: "full-text",
      answers: [{
        _id: '',
        descr: '',
      }]
    }]
  },
  isLoading: false,
  error: null,
};

const quizMachenSlice = createSlice({
  name: "quizMachen",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizByIdThunk.fulfilled, (state, { payload }) => {
        state.quiz = payload
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getQuizByIdThunk.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getQuizByIdThunk.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload === "string" ? action.payload : null;
        }
      );
  },
});

export const quizMachenReducer = quizMachenSlice.reducer;
