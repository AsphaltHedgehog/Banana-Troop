import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addQuizesThunk,
  deleteQuizesThunk,
  fetchCategoriesThunk,
  fetchQuizesByRatingThunk,
  fetchQuizesThunk,
  getFavoriteQuizes,
  updateQuizesThunk,
  getOwnQuizes,
  getPassedQuizzesThunk,
} from "./operations";

export type QuizBody = {
  owner: string;
  _id: string;
  // id: string;
  theme: string;
  category: string;
  background: string;
  ageGroup: string;
  ratingQuantity: number;
  rating: number;
  finished: number;
};

export type Category = {
  _id: string;
  ageGroup: string;
  title: string;
};

export type Total = [
  {
    _id: string;
    total: number;
  }
];

export type Quiz = {
  result: QuizBody[];
  totalQuizes: number;
};

export type QuizByCategories = {
  categories: string;
  data: { result: QuizBody[]; category: Category[]; total: Total };

  currentPage: number;
  pageSize: number;
  totalPages: number;
};

export type QuizState = {
  // listAll: Quiz;
  listCategory: QuizByCategories;
  listRaiting: QuizBody[];
  isLoading: boolean;
  error: string | null;
};

const initialState: QuizState = {
  // listAll: {
  //   result: [],
  //   totalQuizes: 0,
  // },
  listCategory: {
    data: {
      result: [],
      category: [],
      total: [{ _id: "", total: 0 }],
    },

    currentPage: 0,
    pageSize: 0,
    totalPages: 0,
    categories: "",
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
        state.listCategory.data.result = payload.result;
        state.isLoading = false;
      })
      .addCase(fetchQuizesByRatingThunk.fulfilled, (state, { payload }) => {
        state.listRaiting = payload;
        state.isLoading = false;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
        state.listCategory.data = payload.data;
        state.listCategory.data.category = payload.data.category;
        state.listCategory.currentPage = payload.currentPage;
        state.listCategory.pageSize = payload.pageSize;
        state.listCategory.totalPages = payload.totalPages;
        state.listCategory.data.total = payload.data.total;

        state.isLoading = false;
      })
      .addCase(deleteQuizesThunk.fulfilled, (state, { payload }) => {
        state.listCategory.data.result = state.listCategory.data.result.filter(
          (quiz) => quiz._id !== payload
        );
        state.isLoading = false;
      })
      .addCase(updateQuizesThunk.fulfilled, (state, { payload }) => {
        const updatedQuizeIndex = state.listCategory.data.result.findIndex(
          (quiz) => quiz._id === payload._id
        );
        if (updatedQuizeIndex) {
          state.listCategory.data.result[updatedQuizeIndex] = {
            ...state.listCategory.data.result[updatedQuizeIndex],
            ...payload,
          };
        }
        state.isLoading = false;
      })
      .addCase(getFavoriteQuizes.fulfilled, (state, { payload }) => {
        state.listCategory.data.result = payload;
        state.isLoading = false;
      })
      .addCase(getOwnQuizes.fulfilled, (state, { payload }) => {
        state.listCategory.data.result = payload;
        state.isLoading = false;
      })
      .addCase(getPassedQuizzesThunk.fulfilled, (state, { payload }) => {
        state.listCategory.data.result = payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchQuizesThunk.pending,
          fetchCategoriesThunk.pending,
          getFavoriteQuizes.pending,
          getOwnQuizes.pending,
          getPassedQuizzesThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.listCategory.data.result = [];
        }
      )
      .addMatcher(
        isAnyOf(
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
          updateQuizesThunk.rejected,
          fetchCategoriesThunk.rejected,
          getFavoriteQuizes.rejected,
          getOwnQuizes.rejected,
          getPassedQuizzesThunk.rejected
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
