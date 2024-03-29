import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../quiz/operations";
import { quizApi } from "../auth/operations";
import { QuizByCategories, QuizBody } from "../quiz/slice";
import { QueryCategories } from "../quiz/operations";

export const fetchCategoriesThunk = createAsyncThunk<
  QuizByCategories,
  QueryCategories,
  AsyncThunkConfig
>("fetchCategories", async (query, thunkApi) => {
  try {
    const { ageGroup, page, pageSize, rating, finished, title, inputText } =
      query;

    const { data } = await quizApi.get("/quiz/category", {
      params: {
        category: ageGroup,
        page,
        pageSize,
        rating,
        finished,
        title,
        inputText,
      },
    });
    return data as QuizByCategories;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const getQuizByIdThunk = createAsyncThunk<
  QuizBody,
  string,
  AsyncThunkConfig
>("getQuizById", async (_id: string, thunkApi) => {
  try {
    const { data } = await quizApi.get(`/quiz/${_id}`, {
    });
    return data as QuizBody;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});


interface FetchAllCategoriesThunkArg {
  selectedAudience: string;
}

interface Category {
  _id: string;
  ageGroup: string;
  title: string;
}

export const fetchAllCategoriesThunk = createAsyncThunk<
  Category[],
  FetchAllCategoriesThunkArg
>("fetchAllCategories"
  , async (selectedAudience) => {
  const { data } = await quizApi.get(`/quiz/category/all?ageGroup=${selectedAudience.selectedAudience}`);
  return data
});