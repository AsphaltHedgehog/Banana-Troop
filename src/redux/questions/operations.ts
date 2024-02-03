import { createAsyncThunk } from "@reduxjs/toolkit";
import { Questions } from "./slice";
import { instance } from "../fetchInstance";
import { AppDispatch, RootState } from "../store";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const fetchQuestionsByQuizThunk = createAsyncThunk<
  Questions[],
  undefined,
  AsyncThunkConfig
>("fetchAllQuestions", async (_id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    // remember add route!!!!!
    const { data } = await instance.get("q????", {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    // console.log(data);
    return data as Questions[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const addedQuestionByQuizThunk = createAsyncThunk<
  Questions,
  Questions<Omit<Questions, "_id">>,
  AsyncThunkConfig
>("addedQuestionByQuiz", async (body, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    // remember add route!!!!!
    const { data } = await instance.post("q????", body, {
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

export const deleteQuestionByIdThunk = createAsyncThunk<
  string,
  string,
  AsyncThunkConfig
>("deleteQuestionById", async (_id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.delete(`q????/${_id}`, {
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
>("updateQuestionByQuiz", async (question, thunkApi) => {
  try {
    //   const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.patch(`q????/${question._id}`, question, {
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
