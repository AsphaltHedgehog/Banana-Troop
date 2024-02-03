import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchQuizesThunk } from "./operations";

export type Quiz = {
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

export type QuizState = {
  list: Quiz[];
  isLoading: boolean;
  error: string | null;
};

const initialState: QuizState = {
  list: [
    {
      theme: "Іграшки та ігри",
      category: {
        $oid: "65b9b74a0af6ce975d97ee51",
      },
      background: "none",
      ageGroup: "children",
      _id: {
        $oid: "65b9bbe690b27011571e122f",
      },
      ratingQuantity: 74,
      rating: 4.4,
      finished: 144,
    },
    {
      theme: "Казки та мультфільми",
      category: {
        $oid: "65b9b74a0af6ce975d97ee4d",
      },
      background: "none",
      ageGroup: "children",
      _id: {
        $oid: "65b9bc7c1b000b7f42bc06d1",
      },
      ratingQuantity: 54,
      rating: 4.3,
      finished: 196,
    },
  ],
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
        state.list = payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchQuizesThunk.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchQuizesThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : null;
      });
  },
});

export const quizesReducer = quizesSlice.reducer;
