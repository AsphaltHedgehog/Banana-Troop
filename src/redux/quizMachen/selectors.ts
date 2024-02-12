import { RootState } from "../store";

export const selectGetQuiz = (state: RootState) => state.quizMachen.quiz;

export const selectIsLoading = (state: RootState) => state.quizMachen.isLoading;

export const selectIsError = (state: RootState) => state.quizMachen.error;
