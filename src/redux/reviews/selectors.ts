import { RootState } from "../store";

interface Review {
  id: string;
  userName: string;
  avatarUrl: string;
  review: string;
}
interface Reviews {
  review: Review[];
  error: string | null;
  isLoading: boolean;
}

export const reviews = (state: RootState): Reviews => state.reviews;
