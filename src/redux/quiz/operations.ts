import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../fetchInstance";
import { Quiz, QuizBody, QuizByCategories } from "./slice";
import { AppDispatch, RootState } from "../store";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

interface QueryCategories {
  ageGroup: string;
  page?: number;
  pageSize?: number;
  rating?: number;
  finished?: number | null;
  inputText?: string | null;
  title?: string;
}

export const fetchQuizesThunk = createAsyncThunk<
  Quiz, // Тип, який повертається
  {
    page?: number;
    pageSize?: number;
  }, // Тип вхідного параметра
  AsyncThunkConfig
>("fetchAllQuizes", async ({ page, pageSize }, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.get("quiz", {
      //   headers: {
      //     Authorization: Bearer ${savedToken},
      //   },
      params: {
        page,
        pageSize,
      },
    });
    // console.log(data);
    return data as Quiz;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const fetchQuizesByRatingThunk = createAsyncThunk<
  QuizBody[],
  undefined,
  AsyncThunkConfig
>("fetchQuizesByRating", async (_, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.get("quiz/rating", {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    // console.log(data);
    return data as QuizBody[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const fetchCategoriesThunk = createAsyncThunk<
  QuizByCategories,
  QueryCategories,
  AsyncThunkConfig
>("fetchCategories", async (query, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    const { ageGroup, page, pageSize, rating, finished, title, inputText } =
      query;

    const { data } = await instance.get("quiz/category", {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
      params: {
        category: ageGroup,
        page,
        pageSize,
        rating,
        finished,
        title,
        inputText,
      },
    });
    return data as QuizByCategories;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const getQuizByIdThunk = createAsyncThunk<
  QuizBody,
  string,
  AsyncThunkConfig
>("getQuizById", async (_id: string, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.get(`quiz/${_id}`, {
      // headers: {
      //   Authorization: `Bearer ${savedToken}`,
      // },
    });
    return data as QuizBody;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const addQuizesThunk = createAsyncThunk<
  QuizBody,
  { theme: string; ageGroup: string },
  AsyncThunkConfig
>("addedNewQuizes", async (quiz, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    const { theme, ageGroup } = quiz;

    const { data } = await instance.post(
      "quiz",
      { theme, ageGroup },
      {
        // headers: {
        //   Authorization: Bearer ${savedToken},
        // },
      }
    );
    // thunkApi.dispatch(fetchQuizesThunk());
    //   console.log(data);
    return data as QuizBody;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const deleteQuizesThunk = createAsyncThunk<
  string,
  string,
  AsyncThunkConfig
>("deleteQuizById", async (_id, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.delete(`quiz/${_id}`, {
      //   headers: {
      //     Authorization: Bearer ${savedToken},
      //   },
    });
    return data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const updateQuizesThunk = createAsyncThunk<
  QuizBody,
  QuizBody,
  AsyncThunkConfig
>("updateQuiz", async (quiz, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;
    const { _id, ...body } = quiz;
    const { data } = await instance.put(`quiz/:${_id}`, body, {
      //   headers: {
      //     Authorization: Bearer ${savedToken},
      //   },
    });
    return data as QuizBody;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});
