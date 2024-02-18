import { RootState } from "../store";

export const getUpdateOptions = (state: RootState) => state.updateOptions;

export const getCategories = (state: RootState) => state.updateOptions.categories
