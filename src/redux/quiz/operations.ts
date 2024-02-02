import { createAsyncThunk } from "@reduxjs/toolkit";
import quizes from "./quizes.json";

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

    // @ts-expect-error Description: Necessary to suppress TypeScript error
    const { data } = await instance.get(quizes, {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    console.log(data);
    return data as Quiz[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const addQuizesThunk = createAsyncThunk<Quiz, Quiz, AsyncThunkConfig>(
  "addedNewQuizes",
  async (body, thunkApi) => {
    try {
      // const savedToken = thunkApi.getState().auth.accessToken;

      // @ts-expect-error Description: Necessary to suppress TypeScript error
      const { data } = await instance.post(quizes, body, {
        // headers: {
        //   Authorization: `Bearer ${savedToken}`,
        // },
      });
      thunkApi.dispatch(fetchQuizesThunk());
      console.log(data);
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

    // @ts-expect-error Description: Necessary to suppress TypeScript error
    const { data } = await instance.delete(quizes, `/${id}`, {
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
