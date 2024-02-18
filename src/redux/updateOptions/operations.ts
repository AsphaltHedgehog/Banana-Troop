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
    // const savedToken = thunkApi.getState().auth.token;
    const { ageGroup, page, pageSize, rating, finished, title, inputText } =
      query;

    const { data } = await quizApi.get("/quiz/category", {
      // headers: {
      //   Authorization: `Bearer ${savedToken}`,
      // },
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
    const savedToken = thunkApi.getState().auth.token;

    const { data } = await quizApi.get(`/quiz/${_id}`, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    return data as QuizBody;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});



export const fetchAllCategoriesThunk = createAsyncThunk("fetchAllCategories", async (ageGroup) => {
    const { data } = await quizApi.get("/quiz/category/all", {ageGroup});
    return data
});