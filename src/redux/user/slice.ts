import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { editPhotoThunk, editUserThunk, getUserThunk } from "./operations";

interface User {
  _id: string;
  name: string | undefined;
  email: string;
  gravatarURL?: string;
  avatar: string;
  favorites: string[];
}

export interface UserState {
  user: User;
  error: string | null;
  isLoadingUser: boolean;
  isLoadingAvatar: boolean;
}

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    gravatarURL: "",
    avatar: "",
    favorites: [],
  },
  error: null,
  isLoadingUser: false,
  isLoadingAvatar: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteFavorite: (state, { payload }) => {
      const newState = state.user.favorites.filter(
        (favorite) => favorite !== payload
      );
      state.user.favorites = newState;
    },
    addFavorite: (state, { payload }) => {
      state.user.favorites = [...state.user.favorites, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.user._id = payload._id;
        state.user.name = payload.name;
        state.user.gravatarURL = payload.avatarURL;
        state.user.email = payload.email;
        state.user.favorites = payload.favorite;
        state.isLoadingUser = false;
        state.error = null;
      })
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.isLoadingUser = false;
        state.error = null;
      })
      .addCase(editPhotoThunk.fulfilled, (state, { payload }) => {
        state.user.avatar = payload as string;
        state.isLoadingAvatar = false;
        state.error = null;
      })
      .addCase(editPhotoThunk.pending, (state) => {
        state.isLoadingAvatar = true;
      })
      .addMatcher(
        isAnyOf(getUserThunk.pending, editUserThunk.pending),
        (state) => {
          state.isLoadingUser = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getUserThunk.rejected,
          editUserThunk.rejected,
          editPhotoThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoadingUser = false;
          state.isLoadingAvatar = false;
          state.error =
            typeof payload === "string"
              ? payload
              : "Unknown type of error occurred";
        }
      );
  },
});

export const userReducer = userSlice.reducer;

export const { deleteFavorite, addFavorite } = userSlice.actions;
