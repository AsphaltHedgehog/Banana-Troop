import { createSlice } from "@reduxjs/toolkit";

type Quiz = {
  theme: string;
  category: {
    $oid: string;
  };
  background: string;
  ageGroup: string;
  _id: {
    $oid: string;
  };
  ratingQuantity: number;
  rating: number;
  finished: number;
};

type QuizState = {
  list: Quiz[];
};

const initialState: QuizState = {
  list: [],
};

const quizesSlice = createSlice({
  name: "quiz",
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

export const quizesReducer = quizesSlice.reducer;
