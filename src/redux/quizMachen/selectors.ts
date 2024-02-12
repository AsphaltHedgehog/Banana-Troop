import { RootState } from "../store";

export const getQuiz = (state: RootState) => state.quizMachen.quiz;

export const isLoading = (state: RootState) => state.quizMachen.isLoading;

export const isError = (state: RootState) => state.quizMachen.error;
