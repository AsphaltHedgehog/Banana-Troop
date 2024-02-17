import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface ReviewsThunkParams {
  page: number;
  limit: number;
}
type WriteReviewFormData = {
  name: string;
  rating: number;
  review: string;
};

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
        return thunkApi.rejectWithValue("Error");
      }
    }
  }
);

export const reviewsPostThunk = createAsyncThunk<
  ReviewsPost,
  { data: WriteReviewFormData; rating: number }
>("reviewsPost", async ({ data, rating }, thunkApi) => {
  try {
    const state = thunkApi.getState() as RootState; // Приводим к типу RootState
    const { data: responseData }: AxiosResponse<ReviewsPost> =
      await quizApi.post("/reviews/addReview", {
        ...data,
        rating: state.yourRatingSlice.rating,
      });
    return responseData;
  } catch (error) {
    if (error instanceof Error && typeof error.message === "string") {
      return thunkApi.rejectWithValue(error.message);
    } else {
      return thunkApi.rejectWithValue("Error");
    }
  }
});
