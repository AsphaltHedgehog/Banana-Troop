import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../fetchInstance";
import { Quiz } from "./slice";
import { AppDispatch, RootState } from "../store";
import { QuizParams } from "../../pages/CreateQuizPage/CreateQuizPage";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const fetchQuizesThunk = createAsyncThunk<
  Quiz[],
  undefined,
  AsyncThunkConfig
>("fetchAllQuizes", async (_, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.get("quizes", {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    // console.log(data);
    return data as Quiz[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const fetchCategoriesThunk = createAsyncThunk(
  "fetchCategories",
  async (query, thunkApi) => {
    try {
      // const savedToken = thunkApi.getState().auth.accessToken;

      const { data } = await instance.get("quizes/category", {
        params: {
          category: query,
        },
      });
      console.log(data);
      return data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(
        `${(error as Error)?.message ?? "Unknown error"}`
      );
    }
  }
);

export const addQuizesThunk = createAsyncThunk<
  QuizParams,
  { theme: string; ageGroup: string },
  AsyncThunkConfig
>("addedNewQuizes", async (quiz, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    const { theme, ageGroup } = quiz;

    const { data } = await instance.post(
      "quizes",
      { theme, ageGroup },
      {
        // headers: {
        //   Authorization: `Bearer ${savedToken}`,
        // },
      }
    );
    // thunkApi.dispatch(fetchQuizesThunk());
    //   console.log(data);
    return data as QuizParams;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const deleteQuizesThunk = createAsyncThunk<
  string,
  string,
  AsyncThunkConfig
>("deleteQuizById", async (_id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.delete(`quizes/${_id}`, {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    return data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const updateQuizesThunk = createAsyncThunk<Quiz, Quiz, AsyncThunkConfig>(
  "updateQuiz",
  async (quiz, thunkApi) => {
    try {
      // const savedToken = thunkApi.getState().auth.accessToken;
      const { _id, ...body } = quiz;
      const { data } = await instance.put(`quizes/${_id}`, body, {
        //   headers: {
        //     Authorization: `Bearer ${savedToken}`,
        //   },
      });
      return data as Quiz;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(
        `${(error as Error)?.message ?? "Unknown error"}`
      );
    }
  }
);

export const getQuizByIdThunk = createAsyncThunk<
  QuizParams,
  string,
  AsyncThunkConfig
>("getQuizById", async (_id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.get(`${_id}`, {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    return data as QuizParams;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});
