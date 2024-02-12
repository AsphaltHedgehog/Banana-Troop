import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { quizApi } from "../auth/operations";

const instance = axios.create({
  baseURL: "https://pigs.onrender.com/api/user/",
});

interface UserInfo {
  name: string;
  email: string;
  _id: string;
  favorites: string[];
  passedQuizes: number;
  averageSuccess: string;
}

interface UserBody {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

export const getUserThunk = createAsyncThunk<unknown, string>(
  "getUserInfo",
  async (_, thunkApi) => {
    try {
      const { data }: AxiosResponse<UserInfo> = await instance.get("info");
      return data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);

export const editUserThunk = createAsyncThunk<UserBody, string>(
  "editUserInfo",
  async (body, thunkApi) => {
    try {
      const { data } = await instance.patch("update", body);

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
      const { data } = await instance.patch("avatar", body);
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
