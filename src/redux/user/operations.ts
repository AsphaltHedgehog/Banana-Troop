import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { quizApi } from "../auth/operations";

interface UserInfo {
  name: string;
  email: string;
  _id: string;
  favorite: string[];
  passedQuizes: number;
  averageSuccess: string;
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

export const getUserThunk = createAsyncThunk<unknown, void>(
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
      console.log(body);
      console.log(data);
      return data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);

export const editPhotoThunk = createAsyncThunk<UserBody, string>(
  "editUserPhoto",
  async (body, thunkApi) => {
    try {
      const { data } = await quizApi.patch("avatar", body);
      return data;
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
