import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  newPasswordThunk,
  registerThunk,
  resetPasswordThunk,
} from "./operations";

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User;
  token: string;
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
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(resetPasswordThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload?.user?.email || "";
        state.error = null;
        state.isLoading = false;
      })
      .addCase(newPasswordThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload?.user?.email || "";
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, () => {
        initialState;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          resetPasswordThunk.rejected,
          newPasswordThunk.rejected
        ),
        (state, action: PayloadAction<unknown>) => {
          state.error = action.payload as string;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          resetPasswordThunk.pending,
          newPasswordThunk.rejected
        ),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
