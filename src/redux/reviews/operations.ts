import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface Review {
  id: string;
  userName: string;
  avatarUrl: string;
  review: string;
}

interface Reviews {
  reviews: Review[];
}

interface ReviewsThunkParams {
  page: number;
  limit: number;
}

export const quizApi = axios.create({
  baseURL: "https://pigs.onrender.com/api",
});

export const reviewsThunk = createAsyncThunk<Reviews, ReviewsThunkParams>(
  "reviews",
  async ({ page = 1, limit = 6 }, thunkApi) => {
    try {
      const { data }: AxiosResponse<Review> = await quizApi.get(
        "/reviews/getReviews",
        {
          params: {
            page: page,
            limit: limit,
          },
        }
      );
      console.log(data);

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
