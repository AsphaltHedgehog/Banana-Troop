import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./operations";

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User;
  token: string;
  favorites: string[];
  isLoggedIn: boolean;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  favorites: [],
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deleteFavorite: (state, { payload }) => {
      const newState = state.favorites.filter(
        (favorite) => favorite !== payload
      );
      state.favorites = newState;
    },
    addFavorite: (state, { payload }) => {
      state.favorites = [...state.favorites, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, () => {
        initialState;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected
        ),
        (state, action: PayloadAction<unknown>) => {
          state.error = action.payload as string;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      );
  },
});


export const { deleteFavorite, addFavorite } = authSlice.actions;

export const authReducer = authSlice.reducer;
