import { createAsyncThunk } from "@reduxjs/toolkit";
import { Questions } from "./slice";
import { instance } from "../fetchInstance";
import { AppDispatch, RootState } from "../store";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const addedQuestionByQuizThunk = createAsyncThunk<
  Questions,
  Questions<Omit<Questions, "_id">>,
  AsyncThunkConfig
>("addedQuestionByQuiz", async (body, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.post("quiz/question", body, {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    // thunkApi.dispatch(fetchQuestionsByQuizThunk());
    return data.createdQuizQuestion; //return object
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
>("deletedQuestionById", async (_id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.delete(`quiz/question${_id}`, {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    // thunkApi.dispatch(fetchQuestionsByQuizThunk());
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
    //   const savedToken = thunkApi.getState().auth.accessToken;

    const { _id, ...body } = question;
    const { data } = await instance.patch(`quiz/question${_id}`, body, {
      // headers: {
      //   Authorization: `Bearer ${savedToken}`,
      // },
    });

    return data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const deleteQuizQuestionImgByIdThunk = createAsyncThunk<
  string, // Тип, який повертається
  string, // Тип вхідного параметра
  AsyncThunkConfig
>("deletedQuestionImgByQuestionId", async (_id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.delete(`quiz/question/img/${_id}`, {
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
