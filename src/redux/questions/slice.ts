import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addedQuestionByQuizThunk,
  deleteQuestionByIdThunk,
  deleteQuizQuestionImgByIdThunk,
  updateQuestionByQuizThunk,
} from "./operations";

export type Answers = {
  descr: string;
};

export type Questions = {
  _id: string;
  time: string;
  imageUrl: string;
  type: "full-text" | "true-or-false";
  descr: string;
  answers: Answers[];
  validAnswerIndex: string;
};

type QuestionsState = {
  list: Questions[];
  isLoading: boolean;
  error: string | null;
};

const initialState: QuestionsState = {
  list: [],
  isLoading: false,
  error: null,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addedQuestionByQuizThunk.fulfilled, (state, { payload }) => {
        state.list.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteQuestionByIdThunk.fulfilled, (state, { payload }) => {
        state.list = state.list.filter((question) => question._id !== payload);
        state.isLoading = false;
      })
      .addCase(updateQuestionByQuizThunk.fulfilled, (state, { payload }) => {
        const updatedQuestionIndex = state.list.findIndex(
          (question) => question._id === payload._id
        );
        if (updatedQuestionIndex) {
          state.list[updatedQuestionIndex] = {
            ...state.list[updatedQuestionIndex],
            ...payload,
          };
        }
        state.isLoading = false;
      })
      .addCase(
        deleteQuizQuestionImgByIdThunk.fulfilled,
        (state, { payload }) => {
          state.list = state.list.filter(
            (question) => question.imageUrl !== payload
          );
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          deleteQuizQuestionImgByIdThunk.pending,
          addedQuestionByQuizThunk.pending,
          deleteQuestionByIdThunk.pending,
          updateQuestionByQuizThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          deleteQuizQuestionImgByIdThunk.rejected,
          addedQuestionByQuizThunk.rejected,
          deleteQuestionByIdThunk.rejected,
          updateQuestionByQuizThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload === "string" ? action.payload : null;
        }
      );
  },
});

export const questionsReducer = questionsSlice.reducer;
