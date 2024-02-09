import { createAsyncThunk } from "@reduxjs/toolkit";
import { quizApi, setToken } from "../auth/operations";
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
  Quiz, // Тип, який повертається
  {
    page?: number;
    pageSize?: number;
  }, // Тип вхідного параметра
  AsyncThunkConfig
>("fetchAllQuizes", async ({ page, pageSize }, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.token;

    const { data } = await quizApi.get("/quiz", {
      // headers: {
      //   Authorization: `Bearer ${savedToken}`,
      // },
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
    // const savedToken = thunkApi.getState().auth.token;

    const { data } = await quizApi.get("/quiz/rating", {
      // headers: {
      //   Authorization: `Bearer ${savedToken}`,
      // },
    });

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
    // const savedToken = thunkApi.getState().auth.token;
    const { ageGroup, page, pageSize, rating, finished, title, inputText } =
      query;

    const { data } = await quizApi.get("/quiz/category", {
      // headers: {
      //   Authorization: `Bearer ${savedToken}`,
      // },
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

// export const getQuizByIdThunk = createAsyncThunk<
//   QuizBody,
//   string,
//   AsyncThunkConfig
// >("getQuizById", async (_id: string, thunkApi) => {
//   try {
//     const savedToken = thunkApi.getState().auth.token;

//     const { data } = await quizApi.get(`/quiz/${_id}`, {
//       headers: {
//         Authorization: `Bearer ${savedToken}`,
//       },
//     });
//     return data as QuizBody;
//   } catch (error: unknown) {
//     return thunkApi.rejectWithValue(
//       `${(error as Error)?.message ?? "Unknown error"}`
//     );
//   }
// });

export const addQuizesThunk = createAsyncThunk<
  IQuizCreate,
  { theme: string },
  AsyncThunkConfig
>("addedNewQuizes", async (quiz, thunkApi) => {
  try {
    setToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzM5MTVkNzYzYTFjYmNhN2Q2YjE5MCIsImlhdCI6MTcwNzQ3MTMwNCwiZXhwIjoxNzA3NDczMTA0fQ.x3-GEPNS-2J1Uo5VyVk1fBoTMXjVkwet6qm1rY3J81M"
    );
    const { theme } = quiz;

    const { data } = await quizApi.post(
      "/quiz",
      { theme },
      {
        // headers: {
        //   Authorization: `Bearer ${savedToken}`,
        // },
      }
    );
    // thunkApi.dispatch(fetchQuizesThunk());
    //   console.log(data);
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
    setToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzQ4YWUyNTUxMTliOTRlOTQyMjM2OCIsImlhdCI6MTcwNzQxMDUxOSwiZXhwIjoxNzA3NDEyMzE5fQ.fxd6DcA3gIucGvoWrrZseolZmiKcnuqdJZHnbS67IlM"
    );
    // const savedToken = thunkApi.getState().auth.token;

    const { data } = await quizApi.delete(`/quiz/${_id}`, {
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

export const updateQuizesThunk = createAsyncThunk<
  QuizBody,
  EditQuiz,
  AsyncThunkConfig
>("updateQuiz", async (quiz, thunkApi) => {
  try {
    setToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzQ4YWUyNTUxMTliOTRlOTQyMjM2OCIsImlhdCI6MTcwNzQxMDUxOSwiZXhwIjoxNzA3NDEyMzE5fQ.fxd6DcA3gIucGvoWrrZseolZmiKcnuqdJZHnbS67IlM"
    );
    // const savedToken = thunkApi.getState().auth.token;
    const { _id, ...body } = quiz;
    const { data } = await quizApi.patch(`/quiz/${_id}`, body, {
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
