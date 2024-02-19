import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { getUserThunk } from "./redux/user/operations";
import { setToken } from "./redux/auth/operations";
import { selectUserToken } from "./redux/auth/selectors";
import { setLoggedIn } from "./redux/auth/authSlice";

// components
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import DiscoverPage from "./pages/Discover/DiscoverPage";
import RandomQuizPage from "./pages/RandomQuizPage";
import FavoritePage from "./pages/FavoritePage";
import AuthPages from "./pages/AuthPages/AuthPages";
import Settings from "./components/settings/wholeComponent/Settings";
import QreateQuizProtectedPage from "./routes/QreateQuizProtectedPage";
import LastPassedQuizes from "./pages/LastPassedQuizes/LastPassedQuizes";
import QuizMachen from "./pages/quizMachen/QuizMachen";
import MyQuizzesPage from "./pages/MyQuizzesPage/MyQuizzesPage";
import UserHomePage from "./pages/UserHomePage";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { PublicRoute } from "./hoc/PublicRoute";
import { PrivatRoute } from "./hoc/PrivateRoute";

function App() {
  const dispatch = useAppDispatch();
  const userToken = useAppSelector(selectUserToken);

  useEffect(() => {
    try {
      setToken(userToken);
      dispatch(getUserThunk())
        .unwrap()
        .then(() => {
          dispatch(setLoggedIn(true));
        });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userToken]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="settings"
            element={
              <PrivatRoute>
                <Settings />
              </PrivatRoute>
            }
          />
          <Route path="quizMachen/:id" element={<QuizMachen />} />
          <Route
            path="createQuiz"
            element={
              <PrivatRoute>
                <QreateQuizProtectedPage />
              </PrivatRoute>
            }
          />
          <Route
            path="discover"
            element={
              <PrivatRoute>
                <DiscoverPage />
              </PrivatRoute>
            }
          />
          <Route
            path="myQuiz"
            element={
              <PrivatRoute>
                <MyQuizzesPage />
              </PrivatRoute>
            }
          />
          <Route path="randomQuiz" element={<RandomQuizPage />} />
          <Route
            path="favorites"
            element={
              <PrivatRoute>
                <FavoritePage />
              </PrivatRoute>
            }
          />
          <Route
            path="home"
            element={
              <PrivatRoute>
                <UserHomePage />
              </PrivatRoute>
            }
          />
          <Route
            path="lastPassedQuizzes"
            element={
              <PrivatRoute>
                <LastPassedQuizes />
              </PrivatRoute>
            }
          />
          <Route
            path="auth/*"
            element={
              <PublicRoute>
                <AuthPages />
              </PublicRoute>
            }
          />
          <Route
            path="/auth/newPassword/:resetToken"
            element={
              <PublicRoute>
                <AuthPages />
              </PublicRoute>
            }
          />
          <Route
            path="/auth/logout"
            element={
              <PrivatRoute>
                <AuthPages />
              </PrivatRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
