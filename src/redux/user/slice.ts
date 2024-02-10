import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { editPhotoThunk, editUserThunk, getUserThunk } from "./operations";

interface User {
  _id: string;
  name: string;
  email: string;
  photo?: string;
  favorite?: string[];
}

export interface UserState {
  user: User;
  error: string | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    photo: "",
    favorite: [],
  },
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload as User;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload as User;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editPhotoThunk.fulfilled, (state, { payload }) => {
        state.user.photo = payload as string;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getUserThunk.pending,
          editUserThunk.pending,
          editPhotoThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getUserThunk.rejected,
          editUserThunk.rejected,
          editPhotoThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error =
            typeof payload === "string"
              ? payload
              : "Unknown type of error occurred";
        }
      );
  },
});

export const userReducer = userSlice.reducer;
