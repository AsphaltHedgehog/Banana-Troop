import { createAsyncThunk } from "@reduxjs/toolkit";
import { quizApi } from "../auth/operations";
import { Category, Quiz, QuizBody, QuizByCategories } from "./slice";
import { AppDispatch, RootState } from "../store";

export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export interface QueryCategories {
  ageGroup: string;
  page?: number;
  pageSize?: number;
  rating?: number;
  finished?: number | null;
  inputText?: string | null;
  title?: string;
}

interface IQuizCreate {
  _id: string;
  theme: string;
  categories: Category[];
  background: string;
  ageGroup: string;
}

export type EditQuiz = {
  _id: string;
  theme: string;
  category: string;
  background: string;
  ageGroup: string;
};

export const fetchQuizesThunk = createAsyncThunk<
  Quiz,
  {
    page?: number;
    pageSize?: number;
  },
  AsyncThunkConfig
>("fetchAllQuizes", async ({ page, pageSize }, thunkApi) => {
  try {
    const { data } = await quizApi.get("/quiz", {
      params: {
        page,
        pageSize,
      },
    });

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
    const { data } = await quizApi.get("/quiz/rating", {});

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
    const { ageGroup, page, pageSize, rating, finished, title, inputText } =
      query;

    const { data } = await quizApi.get("/quiz/category", {
      params: {
        ageGroup,
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

export const addQuizesThunk = createAsyncThunk<
  IQuizCreate,
  { theme: string },
  AsyncThunkConfig
>("addedNewQuizes", async (quiz, thunkApi) => {
  try {
    const { theme } = quiz;

    const { data } = await quizApi.post("/quiz", { theme });

    return data.data as IQuizCreate;
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
    await quizApi.delete(`/quiz/${_id}`, {});
    return _id;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const updateQuizesThunk = createAsyncThunk<
  QuizBody,
  EditQuiz,
  AsyncThunkConfig
>("updateQuiz", async (quiz, thunkApi) => {
  try {
    const { _id, ...body } = quiz;

    const { data } = await quizApi.patch(`/quiz/${_id}`, body, {
    });
    return data as QuizBody;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const getFavoriteQuizes = createAsyncThunk<
  QuizBody[],
  object
>("getFavoriteQuizes", async (query, thunkApi) => {
  try {
    const { data } = await quizApi.get(`/quiz/favorites`, {
      params: {
        query,
      },
    });
    return data.data.result;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});

export const getOwnQuizes = createAsyncThunk<QuizBody[], void>(
  "getOwnQuizes",
  async (_, thunkApi) => {
    try {
      const { data } = await quizApi.get(`/quiz/myQuizes`);
      return data.data.result;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(
        `${(error as Error)?.message ?? "Unknown error"}`
      );
    }
  }
);

export const getPassedQuizzesThunk = createAsyncThunk<QuizBody[], void>(
  "getPassedQuizes",
  async (_, thunkApi) => {
    try {
      const { data } = await quizApi.get("/user/get-passed");
      return data.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(
        `${(error as Error)?.message ?? "Unknown error"}`
      );
    }
  }
);

export const getTotalQuizzesThunk = createAsyncThunk<
  number,
  void,
  AsyncThunkConfig
>("getTotalQuizzes", async (_, thunkApi) => {
  try {
    const { data } = await quizApi.get("/quiz/getTotal");
    return data as number;
  } catch (error: unknown) {
      return thunkApi.rejectWithValue(
        `${(error as Error)?.message ?? "Unknown error"}`
      );
    }
});