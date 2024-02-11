import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface Review {
  id: string;
  userName: string;
  avatarUrl: string;
  review: string;
}
interface ApiResponse {
  review: Review;
  error: string | null;
  isLoading: boolean;
}

interface ReviewsThunkParams {
  page: number;
  limit: number;
}

export const quizApi = axios.create({
  baseURL: "https://pigs.onrender.com/api",
});

export const reviewsThunk = createAsyncThunk<ApiResponse, ReviewsThunkParams>(
  "reviews",
  async ({ page = 1, limit = 6 }, thunkApi) => {
    try {
      const { data }: AxiosResponse<Review> = await quizApi.get("/getReviews", {
        params: {
          page: page,
          limit: limit,
        },
      });
      return data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("An unknown error occurred");
      }
    }
  }
);
