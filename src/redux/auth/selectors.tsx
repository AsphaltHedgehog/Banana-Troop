
import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;
export const selectUserName = (state: RootState): string =>
  state.auth.user.name;
export const selectUserEmail = (state: RootState): string =>
  state.auth.user.email;
export const selectUserToken = (state: RootState): string => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
