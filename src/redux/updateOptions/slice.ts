import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllCategoriesThunk, fetchCategoriesThunk, getQuizByIdThunk } from "./operations";
import { addQuizesThunk } from "../quiz/operations";

export type categoriesType = {
  _id: string;
  ageGroup: string;
  title: string;
};

export type PayloadType = {
  _id: string;
  theme: string;
  ageGroup: string;
  background: string;
  category: string;
  categories: categoriesType[];
};

const initialState: PayloadType = {
  _id: "",
  theme: "",
  category: "",
  ageGroup: "",
  background: "",
  categories: [],
};

const updateOptionsSlice = createSlice({
  name: "updateOptions",
  initialState,
  reducers: {
    addUpdateOptions: (state, action: PayloadAction<PayloadType>) => {
      state._id = action.payload._id;
      state.theme = action.payload.theme;
      state.category = action.payload.category;
      state.ageGroup = action.payload.ageGroup;
      state.background = action.payload.background;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addBackground: (state, action) => {
      state.background = action.payload;
    },
    defaultState: (state) => {
      state._id = "";
      state.theme = "";
      state.category = "";
      state.categories = [];
      state.ageGroup = "";
      state.background = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.fulfilled, (state, { payload }) => {
        state.category = payload.categories;
      })
      .addCase(getQuizByIdThunk.fulfilled, (state, { payload }) => {
        state._id = payload._id;
        state.theme = payload.theme;
        state.background = payload.background;
        state.ageGroup = payload.ageGroup;
      })
      .addCase(addQuizesThunk.fulfilled, (state, { payload }) => {
        state._id = payload._id;
        state.theme = payload.theme;
        state.categories = payload.categories;
        state.background = payload.background;
        state.ageGroup = payload.ageGroup;
      })
      .addCase(fetchAllCategoriesThunk.fulfilled, (state, { payload }) => { 
        console.log(payload);
        
        state.categories = payload;
    })
  },
});

export const { addUpdateOptions, addCategory, addBackground, defaultState } =
  updateOptionsSlice.actions;
export const updateOptionsReducer = updateOptionsSlice.reducer;
