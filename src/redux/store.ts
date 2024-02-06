import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  // persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { authReducer } from "./auth/slice";
// import { userReducer } from "./user/slice";
import { categoriesReducer } from "./categories/slice";
import { quizesReducer } from "./quiz/slice";
import { questionsReducer } from "./questions/slice";

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["accessToken", "refreshToken", "favorites"],
// };

const rootReducer = combineReducers({
  //   auth: persistReducer(authPersistConfig, authReducer),
  //   user: userReducer,
  categories: categoriesReducer,
  //   reviews: reviewsReducer,
  quizes: quizesReducer,
  questions: questionsReducer,
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
// export const persistor = persistStore(store);
