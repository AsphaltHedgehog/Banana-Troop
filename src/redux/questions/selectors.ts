import { RootState } from "../store";

export const getQuestions = (state: RootState) => state.questions.list;

export const getQuestionsState = (state: RootState) => state.questions;

export const getQuestionsIndex = (state: RootState) =>
  state.questions.selectedIndex;
