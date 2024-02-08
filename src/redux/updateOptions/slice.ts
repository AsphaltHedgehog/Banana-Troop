import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Category = {
  _id: string;
  ageGroup: string;
  title: string;
};

export type UpdateOptionsState = {
  isLoading: boolean;
  error: string | null;
  formUpdateOptions: {
    ageGroup: string;
    background: string;
    category: Category[];
  };
};

const initialState: UpdateOptionsState = {
  isLoading: false,
  error: null,
  formUpdateOptions: {
    ageGroup: "",
    background: "",
    category: [],
  },
};

const updateOptionsSlice = createSlice({
  name: "updateOptions",
  initialState,
  reducers: {
    addUpdateOptions: (state, action: PayloadAction<Category>) => {
      state.formUpdateOptions.category.push(action.payload);
    },
    editedUpdateOptions: (state, action: PayloadAction<Category>) => {
      const index = state.formUpdateOptions.category.findIndex(
        (category) => category._id === action.payload._id
      );
      if (index !== -1) {
        state.formUpdateOptions.category[index] = action.payload;
      }
    },
    deleteUpdateOptions: (state, action: PayloadAction<string>) => {
      state.formUpdateOptions.category =
        state.formUpdateOptions.category.filter(
          (category) => category._id !== action.payload
        );
    },
  },
});

export const { addUpdateOptions, editedUpdateOptions, deleteUpdateOptions } =
  updateOptionsSlice.actions;
export const updateOptionsReducer = updateOptionsSlice.reducer;
