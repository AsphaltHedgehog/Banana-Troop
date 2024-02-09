import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk } from "./operations";

interface User {
  _id: string;
  name: string;
  email: string;
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
    builder.addCase(getUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload as User;
    });
  },
});
export const userReducer = userSlice.reducer;
