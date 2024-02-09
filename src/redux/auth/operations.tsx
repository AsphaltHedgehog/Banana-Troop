import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface User {
  name: string;
  email: string;
}

export interface ApiResponse {
  user: User;
  token: string;
}
export interface Credentials {
  name: string;
  email: string;
  password: string;
}

export const quizApi = axios.create({
  baseURL: "https://pigs.onrender.com/api",
});

export const setToken = (token: string): void => {
  quizApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = (): void => {
  quizApi.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk<ApiResponse, Credentials>(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data }: AxiosResponse<ApiResponse> = await quizApi.post(
        "/auth/register",
        credentials
      );
      setToken(data.token);
      return data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const loginThunk = createAsyncThunk<ApiResponse, Credentials>(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data }: AxiosResponse<ApiResponse> = await quizApi.post(
        "/auth/login",
        credentials
      );
      setToken(data.token);
      return data;
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const logoutThunk = createAsyncThunk<void, void>(
  "logout",
  async (_, thunkApi) => {
    try {
      await quizApi.patch("/auth/logout");
      clearToken();
    } catch (error) {
      if (error instanceof Error && typeof error.message === "string") {
        return thunkApi.rejectWithValue(error.message);
      } else {
        return thunkApi.rejectWithValue("An unknown error occurred");
      }
    }
  }
);
