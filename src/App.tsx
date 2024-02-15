import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { getUserThunk } from "./redux/user/operations";
import { setToken } from "./redux/auth/operations";
import { selectUserToken } from "./redux/auth/selectors";

// components
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import DiscoverPage from "./pages/Discover/DiscoverPage";
import RandomQuizPage from "./pages/RandomQuizPage";
import FavoritePage from "./pages/FavoritePage";
import AuthPages from "./pages/AuthPages/AuthPages";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Settings from "./components/settings/wholeComponent/Settings";
import QreateQuizProtectedPage from "./routes/QreateQuizProtectedPage";
import { setLoggedIn } from "./redux/auth/authSlice";
import QuizMachen from "./pages/quizMachen/QuizMachen";
import MyQuiz from "./pages/myQuiz/MyQuiz";
import WriteReview from "./components/reviewsModal/WriteReview";
import ThanYou from "./components/reviewsModal/ThanYou";

function App() {
  const dispatch = useAppDispatch();
  const userToken = useAppSelector(selectUserToken);

  useEffect(() => {
    setToken(userToken);
    dispatch(getUserThunk())
      .unwrap()
      .then(() => {
        dispatch(setLoggedIn(true));
      });
  }, [dispatch, userToken]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
        <Route path="logout" element={<Logout />} /> */}
          <Route path="settings" element={<Settings />} />
          <Route path="quizMachen/:id" element={<QuizMachen />} />
          <Route path="createQuiz" element={<QreateQuizProtectedPage />} />
          <Route path="randomQuiz" element={<RandomQuizPage />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="myQuiz" element={<MyQuiz />} />
          <Route path="writeReview" element={<WriteReview />} />
          <Route path="thanYou" element={<ThanYou />} />
          <Route path="auth/*" element={<AuthPages />} />
          <Route path="/auth/newPassword/:resetToken" element={<AuthPages />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
