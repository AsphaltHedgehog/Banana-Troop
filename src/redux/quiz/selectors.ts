import { RootState } from "../store";

export const formUpdateOptions = (state: RootState) => state.quizes;
// export const getQuizList = (state: RootState) => state.quizes.listAll.result;
export const getQuizListCategory = (state: RootState) =>
  state.quizes.listCategory.data.result;
export const getQuizCategoryTotal = (state: RootState) =>
  state.quizes.listCategory.data.total;
export const getQuizIsLoading = (state: RootState) => state.quizes.isLoading;
