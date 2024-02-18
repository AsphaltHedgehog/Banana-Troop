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

export interface IPassData {
  quizId: string;
  quantityQuestions: number;
  correctAnswers: number;
  rating: number;
}

export const getQuizByIdThunk = createAsyncThunk<Quiz, AsyncThunkConfig>("getQuizById", async (id, thunkApi) => {
  try {
    const { data }:IApiResponse = await quizApi.get(`/quiz/:${id}`);
    return data; 
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});


export const setPassedQuizThunk = createAsyncThunk<void, IPassData>("setPassedQuiz", async ( passData, thunkApi ) => {
  try {
    await quizApi.patch(`/user/passed-quiz`, passData);
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});