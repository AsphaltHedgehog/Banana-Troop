import { RootState } from "../store";

export const formUpdateOptions = (state: RootState) => state.quizes;
export const getQuizList = (state: RootState) => state.quizes.listAll.result;
export const getQuizListCategory = (state: RootState) =>
  state.quizes.listCategory.data.result;
export const getQuizCategoryPageSize = (state: RootState) =>
  state.quizes.listCategory.totalPages;
