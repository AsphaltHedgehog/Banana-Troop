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
    setAddedCategory: (state, { payload }) => {
      state.list.push(payload);
    },
    setEditedCategory: (state, { payload }) => {
      const index = state.list.findIndex(
        (category) => category._id.$oid === payload._id.$oid
      );
      if (index !== -1) {
        state.list[index] = payload;
      }
    },
    setDeletedCategory: (state, { payload }) => {
      state.list = state.list.filter(
        (category) => category._id.$oid !== payload
      );
    },
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

export const {
  setAddedCategory,
  setEditedCategory,
  setDeletedCategory,
  updateFormOptions,
} = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
