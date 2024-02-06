import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.rootReducer.auth.isLoggedIn;
export const selectUserName = (state: RootState): string =>
  state.rootReducer.auth.user.name;
export const selectUserEmail = (state: RootState): string =>
  state.rootReducer.auth.user.email;
