import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../fetchInstance";
import { Quiz } from "./slice";
import { AppDispatch, RootState } from "../store";
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

export const addQuizesThunk = createAsyncThunk<Quiz, Quiz, AsyncThunkConfig>(
  "addedNewQuizes",
  async (body, thunkApi) => {
    try {
      // const savedToken = thunkApi.getState().auth.accessToken;

      const { data } = await instance.post("quizes", body, {
        // headers: {
        //   Authorization: `Bearer ${savedToken}`,
        // },
      });
      thunkApi.dispatch(fetchQuizesThunk());
      //   console.log(data);
      return data as Quiz;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(
        `${(error as Error)?.message ?? "Unknown error"}`
      );
    }
  }
);

export const deleteCategoryThunk = createAsyncThunk<
  Quiz,
  string,
  AsyncThunkConfig
>("deleteQuizById", async (id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.delete(`quizes/${id}`, {
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
