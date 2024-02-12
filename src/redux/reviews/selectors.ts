import { RootState } from "../store";

interface Review {
  _id: string;
  userName: string;
  avatarUrl: string;
  review: string;
  createdAt: string;
  updatedAt: string;
}
interface Reviews {
  review: Review[];
  error: string | null;
  isLoading: boolean;
}

export const reviews = (state: RootState): Reviews => state.reviews;
