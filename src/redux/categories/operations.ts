import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../fetchInstance";
import { category } from "./slice";
import { AppDispatch, RootState } from "../store";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const fetchCategoriesThunk = createAsyncThunk<
  category[],
  undefined,
  AsyncThunkConfig
>("fetchAllCategories", async (_, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.get("categories", {
      //   headers: {
      //     Authorization: `Bearer ${savedToken}`,
      //   },
    });
    // console.log(data);
    return data as category[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});
export const editCategoryThunk = createAsyncThunk<
  category[],
  { _id: { $oid: string }; ageGroup: string; title: string },
  AsyncThunkConfig
>("category/edit", async ({ _id, ageGroup, title }, thunkApi) => {
  try {
    // const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.patch(
      `categories/${_id.$oid}`,
      { ageGroup, title },
      {
        //   headers: {
        //     Authorization: `Bearer ${savedToken}`,
        //   },
      }
    );
    // console.log(data);
    return data as category[];
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `Error editing category: ${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});
