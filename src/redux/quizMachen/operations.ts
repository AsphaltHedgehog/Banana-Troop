import { createAsyncThunk } from "@reduxjs/toolkit";
import { Quiz } from "./slice";
import { AppDispatch, RootState } from "../store";
import { quizApi } from "../auth/operations";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

interface IApiResponse {
  data: Quiz;
  code: string;
  status: string;
}

export const getQuizByIdThunk = createAsyncThunk<Quiz, AsyncThunkConfig>("getQuizById", async (id, thunkApi) => {
  try {
    const { data }:IApiResponse = await quizApi.get(`/quiz/:${id}`);
    console.log(data);
    return data; 
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});