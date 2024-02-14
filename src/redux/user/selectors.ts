import { RootState } from "./../store";

export const selectGetUser = (state: RootState) => state.user.user;
export const selectGetUserFavorite = (state: RootState) =>
  state.user.user.favorite;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserIsLoading = (state: RootState) =>
  state.user.isLoadingUser;
export const selectAvatarIsLoading = (state: RootState) =>
  state.user.isLoadingAvatar;
