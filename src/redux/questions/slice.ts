import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addedQuestionByQuizThunk,
  deleteQuestionByIdThunk,
  deleteQuizQuestionImgByIdThunk,
  updateQuestionByQuizThunk,
} from "./operations";

export type Answers = {
  descr: string;
  _id?: string;
};

export type Questions = {
  _id: string;
  quiz: string | undefined;
  time: string | undefined;
  imageUrl: string | undefined;
  type: "full-text" | "true-or-false";
  descr: string | undefined;
  answers: Answers[] | [];
  validAnswer: string | undefined;
};

type QuestionsState = {
  list: Questions[];
  selectedIndex: number;
  isLoading: boolean;
  error: string | null;
};

const initialState: QuestionsState = {
  list: [
    {
      _id: "65befd710e00dce39b3e7b5f",
      quiz: "65b9bbe690b27011571e122f",
      time: "00:45",
      descr: "Какой нахуй ужас...",
      answers: [
        {
          descr: "Ага, ебанёшься",
          _id: "65befd710e00dce39b3e7b5b",
        },
        {
          descr: "АААААА",
          _id: "65befd710e00dce39b3e7b5c",
        },
        {
          descr: "...",
          _id: "65befd710e00dce39b3e7b5d",
        },
        {
          descr: "биб буп",
          _id: "65befd710e00dce39b3e7b5e",
        },
      ],
      validAnswer: "65befd710e00dce39b3e7b5c",
      imageUrl: "sfirroot5cdwxhftzxzi",
      type: "full-text",
    },
    // {
    //   _id: "65befd8b0e00dce39b3e7b69",
    //   quiz: "65b9bbe690b27011571e122f",
    //   time: "00:45",
    //   descr: "Какой нахуй ужас...",
    //   answers: [
    //     {
    //       descr: "1",
    //       _id: "65bf0c84020f06fd1d567e0d",
    //     },
    //     {
    //       descr: "2",
    //       _id: "65bf0c84020f06fd1d567e0e",
    //     },
    //   ],
    //   validAnswer: "65befd8b0e00dce39b3e7b68",
    //   imageUrl: "qt3typvogdj8ghkippjf",
    //   type: "true-or-false",
    // },
    // {
    //   _id: "65c03503e716168b64982815",
    //   quiz: "65b9bbe690b27011571e122f",
    //   time: "00:45",
    //   descr: "Какой нахуй ужас...",
    //   answers: [
    //     {
    //       descr: "Ага, ебанёшься",
    //       _id: "65c03503e716168b64982811",
    //     },
    //     {
    //       descr: "АААААА",
    //       _id: "65c03503e716168b64982812",
    //     },
    //     {
    //       descr: "...",
    //       _id: "65c03503e716168b64982813",
    //     },
    //     {
    //       descr: "биб буп",
    //       _id: "65c03503e716168b64982814",
    //     },
    //   ],
    //   validAnswer: "65c03503e716168b64982814",
    //   imageUrl: "http://google.com",
    //   type: "true-or-false",
    // },
    // {
    //   _id: "65c0357abf3add5292b57379",
    //   quiz: "65b9bbe690b27011571e122f",
    //   time: "00:45",
    //   descr: "Какой нахуй ужас...",
    //   answers: [
    //     {
    //       descr: "Ага, ебанёшься",
    //       _id: "65c0357abf3add5292b57375",
    //     },
    //     {
    //       descr: "АААААА",
    //       _id: "65c0357abf3add5292b57376",
    //     },
    //     {
    //       descr: "...",
    //       _id: "65c0357abf3add5292b57377",
    //     },
    //     {
    //       descr: "биб буп",
    //       _id: "65c0357abf3add5292b57378",
    //     },
    //   ],
    //   validAnswer: "65c0357abf3add5292b57378",
    //   imageUrl: "http://google.com",
    //   type: "true-or-false",
    // },
    // {
    //   _id: "65c21046d799b0483feb4ceb",
    //   quiz: "65b9bbe690b27011571e122f",
    //   time: "00:45",
    //   descr: "Какой нахуй ужас...",
    //   answers: [
    //     {
    //       descr: "Ага, ебанёшься",
    //       _id: "65c21046d799b0483feb4ce7",
    //     },
    //     {
    //       descr: "АААААА",
    //       _id: "65c21046d799b0483feb4ce8",
    //     },
    //     {
    //       descr: "...",
    //       _id: "65c21046d799b0483feb4ce9",
    //     },
    //     {
    //       descr: "биб буп",
    //       _id: "65c21046d799b0483feb4cea",
    //     },
    //   ],
    //   validAnswer: "65c21046d799b0483feb4cea",
    //   imageUrl: "http://google.com",
    //   type: "true-or-false",
    // },
    // {
    //   _id: "65c4a18caff5dc204f8f15a5",
    //   quiz: "65b9bbe690b27011571e122f",
    //   time: "00:45",
    //   descr: "Какой нахуй ужас...",
    //   answers: [
    //     {
    //       descr: "Ага, ебанёшься",
    //       _id: "65c4a18caff5dc204f8f15a1",
    //     },
    //     {
    //       descr: "АААААА",
    //       _id: "65c4a18caff5dc204f8f15a2",
    //     },
    //     {
    //       descr: "...",
    //       _id: "65c4a18caff5dc204f8f15a3",
    //     },
    //     {
    //       descr: "биб буп",
    //       _id: "65c4a18caff5dc204f8f15a4",
    //     },
    //   ],
    //   validAnswer: "65c4a18caff5dc204f8f15a4",
    //   imageUrl: "http://google.com",
    //   type: "true-or-false",
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
      .addCase(addedQuestionByQuizThunk.fulfilled, (state, { payload }) => {
        state.list.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteQuestionByIdThunk.fulfilled, (state, { payload }) => {
        state.list = state.list.filter((question) => question.quiz !== payload);
        state.isLoading = false;
      })
      .addCase(updateQuestionByQuizThunk.fulfilled, (state, { payload }) => {
        const updatedQuestionIndex = state.list.findIndex(
          (question) => question.quiz === payload.quiz
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
