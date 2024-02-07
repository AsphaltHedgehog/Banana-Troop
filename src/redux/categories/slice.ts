import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCategoriesThunk, editCategoryThunk } from "./operations";

export type category = {
  _id: {
    $oid: string;
  };
  ageGroup: string;
  title: string;
};

export type CategoryState = {
  list: category[];
  isLoading: boolean;
  error: string | null;
  formUpdateOptions: {
    ageGroup: string;
    background: string;
    category: string[];
  };
};

const initialState: CategoryState = {
  list: [],
  isLoading: false,
  error: null,
  formUpdateOptions: {
    ageGroup: "",
    background: "",
    category: [""],
  },
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateFormOptions: (state, action) => {
      state.formUpdateOptions = {
        ...state.formUpdateOptions,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoading = false;
      })
      .addCase(editCategoryThunk.fulfilled, (state, { payload }) => {
        const itemIndex = state.list.findIndex(
          (item) => item._id.$oid === payload[0]._id.$oid
        );
        if (itemIndex !== -1) {
          state.list[itemIndex] = payload[0];
        }
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchCategoriesThunk.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchCategoriesThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : null;
      });
  },
});

export const { updateFormOptions } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
