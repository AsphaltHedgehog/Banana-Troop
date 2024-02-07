import { RootState } from "../store";

export const formUpdateOptions = (state: RootState) => state.quizes;
export const getQuizList = (state: RootState) => state.quizes.listAll.result;
