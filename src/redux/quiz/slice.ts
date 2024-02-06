import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addQuizesThunk,
  deleteQuizesThunk,
  fetchCategoriesThunk,
  fetchQuizesByRatingThunk,
  fetchQuizesThunk,
  updateQuizesThunk,
} from "./operations";

export type QuizBody = {
  _id: string;
  theme: string;
  category: string[];
  background: string;
  ageGroup: string;
  ratingQuantity: number;
  rating: number;
  finished: number | null;
};
export type Category = {
  _id: string;
  ageGroup: string;
  title: string;
};

export type Quiz = {
  result: QuizBody[];
  totalQuizes: number;
};

export type QuizByCategories = {
  data: QuizBody[];
  categories: Category[];
  currentPage: number | null;
  pageSize: number | null;
  totalPages: number | null;
  totalQuizzesCount: number;
};
export type Category = {
  _id: string;
  ageGroup: string;
  title: string;
};

export type Quiz = {
  result: QuizBody[];
  totalQuizes: number;
};

export type QuizByCategories = {
  data: QuizBody[];
  categories: Category[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalQuizzesCount: number;
};

export type QuizState = {
  listAll: Quiz;
  listCategory: QuizByCategories;
  listRaiting: QuizBody[];
  isLoading: boolean;
  error: string | null;
};

const initialState: QuizState = {
  listAll: {
    result: [],
    totalQuizes: 0,
  },
  listCategory: {
    data: [],
    categories: [],
    currentPage: 0,
    pageSize: 0,
    totalPages: 0,
    totalQuizzesCount: 0,
  },
  listRaiting: [],
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
        state.listAll.result = payload.result;
        state.isLoading = false;
      })
      .addCase(fetchQuizesByRatingThunk.fulfilled, (state, { payload }) => {
        state.listRaiting = payload;
        state.isLoading = false;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
        state.listCategory.data = payload.data;
        state.listCategory.categories = payload.categories;
        state.listCategory.currentPage = payload.currentPage;
        state.listCategory.pageSize = payload.pageSize;
        state.listCategory.totalPages = payload.totalPages;
        state.listCategory.totalQuizzesCount = payload.totalQuizzesCount;
        state.isLoading = false;
      })
      .addCase(addQuizesThunk.fulfilled, (state, { payload }) => {
        if (payload && payload._id) {
          state.listAll.result.push(payload);
          state.isLoading = false;
        }
      })
      .addCase(deleteQuizesThunk.fulfilled, (state, { payload }) => {
        state.listAll.result = state.listAll.result.filter(
          (quiz) => quiz._id !== payload
        );
        state.isLoading = false;
      })
      .addCase(updateQuizesThunk.fulfilled, (state, { payload }) => {
        const updatedQuizeIndex = state.listAll.result.findIndex(
          (quiz) => quiz._id === payload._id
        );
        if (updatedQuizeIndex) {
          state.listAll.result[updatedQuizeIndex] = {
            ...state.listAll.result[updatedQuizeIndex],
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
