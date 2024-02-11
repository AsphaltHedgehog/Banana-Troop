import { RootState } from "../store";

export const selectUserName = (state: RootState): string => state.auth.userName;
export const selectUserAvatar = (state: RootState): string =>
  state.auth.avatarUrl;
export const selectReview = (state: RootState): string => state.auth.reviews;
