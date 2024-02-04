import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addedQuestionByQuizThunk,
  deleteQuestionByIdThunk,
  fetchQuestionsByQuizThunk,
  updateQuestionByQuizThunk,
} from "./operations";

export type Answers = {
  descr: string;
  _id: {
    $oid: string;
  };
};

export type Questions<TId = string> = {
  quiz: {
    $oid: string;
  };
  time: string;
  imageUrl: string;
  type: string;
  descr: string;
  answers: Answers[];
  validAnswer: {
    $oid: string;
  };
  _id: TId;
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
      .addCase(fetchQuestionsByQuizThunk.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoading = false;
      })
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
      .addMatcher(
        isAnyOf(
          fetchQuestionsByQuizThunk.pending,
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
          fetchQuestionsByQuizThunk.rejected,
          addedQuestionByQuizThunk.rejected,
          deleteQuestionByIdThunk.rejected,
          updateQuestionByQuizThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === "string" ? action.payload : null;
        }
      );
  },
});

export const questionsReducer = questionsSlice.reducer;
