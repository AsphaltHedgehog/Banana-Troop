// import { Root } from "react-dom/client";
import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;
export const selectUserName = (state: RootState): string =>
  state.auth.user.name;
export const selectUserEmail = (state: RootState): string =>
  state.auth.user.email;
export const selectUserFavorites = (state: RootState) =>
  state.auth.favorites;
