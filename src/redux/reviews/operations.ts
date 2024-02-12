import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface ReviewsThunkParams {
  page: number;
  limit: number;
}

interface IResponse {
  code: number;
  data: unknown[];
}

export const quizApi = axios.create({
  baseURL: "https://pigs.onrender.com/api",
});

export const reviewsThunk = createAsyncThunk<unknown, ReviewsThunkParams>(
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

      return data.data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("An unknown error occurred");
      }
    }
  }
);
