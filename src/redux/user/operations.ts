import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { quizApi } from "../auth/operations";
import { IPassedQuizzes } from "./slice";

interface UserInfo {
  name: string;
  email: string;
  _id: string;
  avatarURL: string;
  favorite: string[];
  passedQuizzes?: IPassedQuizzes[];
  averageSuccess?: string;
  average: number;
  totalQuestions: number;
  totalAnswers: number;
}

interface UserBody {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

interface IResponse {
  code: number;
  data: { user: UserInfo };
  status: string;
}

interface PatchPassedQuizRequest {
  quizId: string;
  quantityQuestions: number;
  correctAnswers: number;
  rating: number;
  totalQuestions: number;
}

interface PatchPassedQuizResponse {
  totalAnswers: number;
  totalQuestions: number;
  average: number;
  passedQuizzes: IPassedQuizzes[];
}

interface RetakePassedQuizRequest {
  quizId: string;
  quantityQuestions: number;
  correctAnswers: number;
  totalQuestions: number;
}

interface RetakePassedQuizResponse {
  totalAnswers: number;
  totalQuestions: number;
  average: number;
  passedQuizzes: IPassedQuizzes[];
}



export const getUserThunk = createAsyncThunk<UserInfo, void>(
  "getUserInfo",
  async (_, thunkApi) => {
    try {
      const { data }: AxiosResponse<IResponse> = await quizApi.get("user/info");
      return data.data.user;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);

export const editUserThunk = createAsyncThunk<UserBody, UserBody>(
  "editUserInfo",
  async (body, thunkApi) => {
    try {
      const { data } = await quizApi.patch("user/update", body);
      return data.data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);

export const editPhotoThunk = createAsyncThunk<UserBody, File>(
  "editUserPhoto",
  async (file, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("userAvatar", file);
      const { data } = await quizApi.patch("user/update/avatarURL", formData);
      return data.data.avatarURL;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);

export const updateFavoriteThunk = createAsyncThunk<void, { favorite: string }>(
  "updateFavorite",
  async (body, thunkApi) => {
    try {
      const addFavorite = await quizApi.patch("/user/favorite", body);
      return addFavorite.data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const patchPassedQuiz = createAsyncThunk<
  PatchPassedQuizResponse,
  PatchPassedQuizRequest
>("user/patchPassedQuiz", async (body, thunkApi) => {
  try {
    const response: AxiosResponse<PatchPassedQuizResponse> =
      await quizApi.patch("/user/passed-quiz", body);
    return response.data;
  } catch (error) {
    if (error instanceof Error && typeof error.message === "string") {
      return thunkApi.rejectWithValue(error.message);
    }
    return thunkApi.rejectWithValue("An unknown error occurred");
  }
});

export const retakePassedQuiz = createAsyncThunk<
  RetakePassedQuizResponse,
  RetakePassedQuizRequest
>("user/retakePassedQuiz", async (body, thunkApi) => {
  try {
    const response: AxiosResponse<RetakePassedQuizResponse> =
      await quizApi.patch("/user/retake-passed-quiz", body);
    return response.data;
  } catch (error) {
    if (error instanceof Error && typeof error.message === "string") {
      return thunkApi.rejectWithValue(error.message);
    }
    return thunkApi.rejectWithValue("An unknown error occurred");
  }
});

