import { createAsyncThunk } from "@reduxjs/toolkit";
import { Questions } from "./slice";
import { AppDispatch, RootState } from "../store";
import { quizApi } from "../auth/operations";
import { Answers } from "./slice";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

interface INewQuestion {
  _id: string;
  quiz?: string;
  time?: string;
  imageUrl?: string;
  type: "full-text" | "true-or-false";
  descr?: string;
  answers?: Answers[];
  validAnswer?: string;
}

export const addedQuestionByQuizThunk = createAsyncThunk<
  Questions[],
  INewQuestion,
  AsyncThunkConfig
>("addedQuestionByQuiz", async (body, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.token;
    const { _id, ...question } = body;
    const { data } = await quizApi.post(`/quiz/question/${_id}`, question, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    return data.data as Questions[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const deleteQuestionByIdThunk = createAsyncThunk<
  string,
  string,
  AsyncThunkConfig
>("deletedQuestionById", async (id, thunkApi) => {
  try {
    const { data } = await quizApi.delete(`/quiz/question/${id}`);
    return data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const updateQuestionByQuizThunk = createAsyncThunk<
  Questions,
  Questions,
  AsyncThunkConfig
>("updatedQuestionByQuiz", async (question, thunkApi) => {
  try {
    const { _id, ...body } = question;
    const { descr, time, validAnswer, answers } = body;
    
    const { data } = await quizApi.patch(`/quiz/question/${_id}`, { descr, time, validAnswer, answers }, {
    });

    return data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const updateQuizQuestionImgByIdThunk = createAsyncThunk<
  string, // Тип, який повертається
  { _id?: string; image: File }, // Тип вхідного параметра
  AsyncThunkConfig
>("updatedQuestionImgByQuestionId", async (questionFile, thunkApi) => {
  try {
    const { _id, image } = questionFile;
    const formData = new FormData();
    formData.append("questionPoster", image);

    const savedToken = thunkApi.getState().auth.token;

    const { data } = await quizApi.patch(
      `/quiz/question/img/${_id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      }
    );
    return data.data.imageUrl as string;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const deleteQuizQuestionImgByIdThunk = createAsyncThunk<
  string, // Тип, який повертається
  { _id?: string }, // Тип вхідного параметра
  AsyncThunkConfig
>("deletedQuestionImgByQuestionId", async ({ _id }, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.token;

    const { data } = await quizApi.delete(`/quiz/question/img/${_id}`, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    return data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const fetchQuestionsByQuizThunk = createAsyncThunk<
  Questions[],
  string,
  AsyncThunkConfig
>("fetchedQuestionsByQuiz", async (_id, thunkApi) => {
  try {
    const { data } = await quizApi.get(`/quiz/question/${_id}`, {
    });

    return data.data as Questions[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});
