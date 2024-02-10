import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addedQuestionByQuizThunk,
  deleteQuestionByIdThunk,
  deleteQuizQuestionImgByIdThunk,
  fetchQuestionsByQuizThunk,
  updateQuestionByQuizThunk,
} from "./operations";

export type Answers = {
  descr?: string;
  _id?: string;
};

export type Questions = {
  _id?: string;
  quiz?: string;
  time?: string;
  imageUrl?: string;
  type?: "full-text" | "true-or-false";
  descr?: string;
  answers?: Answers[];
  validAnswer?: string;
};

type QuestionsState = {
  list: Questions[];
  selectedIndex: number;
  isLoading: boolean;
  error: string | null;
};

const initialState: QuestionsState = {
  list: [
    // {
    //   _id: "65befd710e00dce39b3e7b5f",
    //   quiz: "65b9bbe690b27011571e122f",
    //   time: "00:45",
    //   descr: "",
    //   answers: [
    //     {
    //       descr: "Ага, ебанёшься",
    //       _id: "65befd710e00dce39b3e7b5b",
    //     },
    //     {
    //       descr: "АААААА",
    //       _id: "65befd710e00dce39b3e7b5c",
    //     },
    //     {
    //       descr: "...",
    //       _id: "65befd710e00dce39b3e7b5d",
    //     },
    //     {
    //       descr: "биб буп",
    //       _id: "65befd710e00dce39b3e7b5e",
    //     },
    //   ],
    //   validAnswer: "65befd710e00dce39b3e7b5c",
    //   imageUrl: "sfirroot5cdwxhftzxzi",
    //   type: "full-text",
    // },
  ],
  selectedIndex: 0,
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
      // .addCase(
      //   deleteQuizQuestionImgByIdThunk.fulfilled,
      //   (state, { payload }) => {
      //     state.list = state.list.filter(
      //       (question) => question._id !== payload
      //     );
      //     state.isLoading = false;
      //   }
      // )
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
