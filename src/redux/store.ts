import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { quizesReducer } from "./quiz/slice";
import { questionsReducer } from "./questions/slice";
import { reviewsReducer } from "./reviews/slice";
import { updateOptionsReducer } from "./updateOptions/slice";
import { userReducer } from "./user/slice";
import { quizMachenReducer } from "./quizMachen/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "favorites"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),

  reviews: reviewsReducer,
  user: userReducer,
  updateOptions: updateOptionsReducer,

  quizes: quizesReducer,
  questions: questionsReducer,
  quizMachen: quizMachenReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
