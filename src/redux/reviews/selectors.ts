import { RootState } from "../store";
export const reviews = (state: RootState): string => state.reviews;
export const selectUserId = (state: RootState): string =>
  state.reviews.review.id;
export const selectUserName = (state: RootState): string =>
  state.reviews.review.userName;
export const selectUserAvatar = (state: RootState): string =>
  state.reviews.review.avatarUrl;
export const selectReview = (state: RootState): string =>
  state.reviews.review.review;
