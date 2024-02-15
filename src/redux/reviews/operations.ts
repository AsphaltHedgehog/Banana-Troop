import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface ReviewsThunkParams {
  page: number;
  limit: number;
}
interface Review {
  _id: string;
  userName: string;
  avatarUrl: string;
  rating: string;
  review: string;
  createdAt: string;
  updatedAt: string;
}
interface ReviewsPost {
  _id: string;
  userName: string;
  avatarUrl: string;
  review: string;
  createdAt: string;
  updatedAt: string;
  rating: string;
}
// interface Reviews {
//   reviews: Review[];
// }
interface IResponse {
  code: number;
  data: unknown[];
}

export const quizApi = axios.create({
  baseURL: "https://pigs.onrender.com/api",
});

export const reviewsThunk = createAsyncThunk<Review[], ReviewsThunkParams>(
  "reviews",
  async ({ page = 1, limit = 6 }, thunkApi) => {
    try {
      const { data }: AxiosResponse<IResponse> = await quizApi.get(
        "/reviews/getReviews",
        {
          params: {
            page: page,
            limit: limit,
          },
        }
      );
      return data.data as Review[];
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("Произошла неизвестная ошибка");
      }
    }
  }
);

export const reviewsPostThunk = createAsyncThunk<ReviewsPost>(
  "reviewsPost",
  async (_: void, thunkApi) => {
    try {
      const { data }: AxiosResponse<ReviewsPost> = await quizApi.post(
        "/reviews/:id/addReview"
      );
      return data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("Произошла неизвестная ошибка");
      }
    }
  }
);
