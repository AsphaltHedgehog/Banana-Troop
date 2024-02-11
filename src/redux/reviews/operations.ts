import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Reviews {
  id: string;
  userName: string;
  avatarUrl: string;
  review: string;
}

export const quizApi = axios.create({
  baseURL: "https://pigs.onrender.com/api",
});

export const reviewsThunk = createAsyncThunk<ApiResponse>(
  "reviews",
  async ({ page = 1, limit = 6 }, thunkApi) => {
    try {
      const { data }: AxiosResponse<Reviews> = await quizApi.get(
        "/getReviews",
        {
          params: {
            page: page,
            limit: limit,
          },
        }
      );
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
