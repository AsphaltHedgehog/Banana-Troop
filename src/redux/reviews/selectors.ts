interface Review {
  id: string;
  userName: string;
  avatarUrl: string;
  review: string;
}
interface Reviews {
  review: Review;
  error: string | null;
  isLoading: boolean;
}

import { RootState } from "../store";
export const reviews = (state: RootState): Reviews => state.reviews;
// export const selectUserId = (state: RootState): string =>
//   state.reviews.review.id;
// export const selectUserName = (state: RootState): string =>
//   state.reviews.review.userName;
// export const selectUserAvatar = (state: RootState): string =>
//   state.reviews.review.avatarUrl;
// export const selectReview = (state: RootState): string =>
//   state.reviews.review.review;
