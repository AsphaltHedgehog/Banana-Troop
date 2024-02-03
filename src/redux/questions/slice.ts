import { createSlice } from "@reduxjs/toolkit";

export type Answers = {
  descr: string;
  _id: {
    $oid: string;
  };
};

type Questions = {
  quiz: {
    $oid: string;
  };
  time: string;
  imageUrl: string;
  type: string;
  descr: string;
  answers: Answers[];
};

type QuestionsState = {
  list: Questions[];
};

const initialState: QuestionsState = {
  list: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
    //   .addCase(Thunk.fulfilled, (state, { payload }) => {
    //     state.transactions = payload;
    //     state.isLoading = false;
    //   })

    //   .addMatcher(
    //     isAnyOf(Thunk.pending, Thunk.pending, Thunk.pending, Thunk.pending),
    //     (state, { payload }) => {
    //       state.isLoading = true;
    //     }
    //   )
    //   .addMatcher(
    //     isAnyOf(Thunk.rejected, Thunk.rejected, Thunk.rejected, Thunk.rejected),
    //     (state, { payload }) => {
    //       state.isLoading = false;
    //       state.error = payload;
    //     }
    //   );
  },
});

export const questionsReducer = questionsSlice.reducer;
