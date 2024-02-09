import { RootState } from "./../store";

export const getUser = (state: RootState) => state.user.user;
export const getUserFavorite = (state: RootState) => state.user.user.favorite;
export const userError = (state: RootState) => state.user.error;
export const userIsLoading = (state: RootState) => state.user.isLoading;
