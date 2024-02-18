import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  editPhotoThunk,
  editUserThunk,
  getPassedQuizzesThunk,
  getUserThunk,
  patchPassedQuiz,
  retakePassedQuiz,
} from "./operations";

export interface IPassedQuizzes {
  quizId: string;
  quantityQuestions: number;
  correctAnswers: number;
  rating: number;
}

interface User {
  _id: string;
  name: string | undefined;
  email: string;
  gravatarURL?: string;
  avatar: string;
  favorites: string[];
  totalAnswers?: number;
  totalQuestions?: number;
  average?: number;
  passedQuizzes?: IPassedQuizzes[];
}

export interface UserState {
  user: User;
  error: string | null;
  isLoadingUser: boolean;
  isLoadingAvatar: boolean;
}

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    avatar: "",
    favorites: [],
    totalAnswers: 0,
    totalQuestions: 0,
    average: 0,
    passedQuizzes: [],
  },
  error: null,
  isLoadingUser: false,
  isLoadingAvatar: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteFavorite: (state, { payload }) => {
      const newState = state.user.favorites.filter(
        (favorite) => favorite !== payload
      );
      state.user.favorites = newState;
    },
    addFavorite: (state, { payload }) => {
      state.user.favorites = [...state.user.favorites, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.user._id = payload._id;
        state.user.name = payload.name;
        state.user.avatar = payload.avatarURL;
        state.user.email = payload.email;
        state.user.favorites = payload.favorite;
        state.isLoadingUser = false;
        state.error = null;
      })
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.isLoadingUser = false;
        state.error = null;
      })
      .addCase(editPhotoThunk.fulfilled, (state, { payload }) => {
        state.user.avatar =
          `https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/${payload}` as string;
        state.isLoadingAvatar = false;
        state.error = null;
      })
      .addCase(editPhotoThunk.pending, (state) => {
        state.isLoadingAvatar = true;
      })
      .addCase(patchPassedQuiz.fulfilled, (state, { payload }) => {
        state.user.totalAnswers = payload.totalAnswers;
        state.user.totalQuestions = payload.totalQuestions;
        state.user.average = payload.average;
        state.user.passedQuizzes = payload.passedQuizzes;
      })
      .addCase(retakePassedQuiz.fulfilled, (state, { payload }) => {
        state.user.totalAnswers = payload.totalAnswers;
        state.user.totalQuestions = payload.totalQuestions;
        state.user.average = payload.average;
        state.user.passedQuizzes = payload.passedQuizzes;
      })
      .addCase(getPassedQuizzesThunk.fulfilled, (state, { payload }) => {
        state.user.passedQuizzes = payload.passedQuizzes;
      })
      .addMatcher(
        isAnyOf(getUserThunk.pending, editUserThunk.pending),
        (state) => {
          state.isLoadingUser = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getUserThunk.rejected,
          editUserThunk.rejected,
          editPhotoThunk.rejected,
          patchPassedQuiz.rejected,
          retakePassedQuiz.rejected,
          getPassedQuizzesThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoadingUser = false;
          state.isLoadingAvatar = false;
          state.error =
            typeof payload === "string"
              ? payload
              : "Unknown type of error occurred";
        }
      );
  },
});

export const userReducer = userSlice.reducer;

export const { deleteFavorite, addFavorite } = userSlice.actions;
