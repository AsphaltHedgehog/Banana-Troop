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
import ForAdults from "./components/forAdults/ForAdults";
import ForChildren from "./components/forChildren/ForChildren";
import AuthPages from "./pages/AuthPages/AuthPages";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Settings from "./components/settings/wholeComponent/Settings";
import QreateQuizProtectedPage from "./routes/QreateQuizProtectedPage";
import { setLoggedIn } from "./redux/auth/authSlice";

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
          <Route path="settings" element={<Settings />} />
          <Route path="forAdults" element={<ForAdults />} />
          <Route path="forChildren" element={<ForChildren />} />
          <Route path="createQuiz" element={<QreateQuizProtectedPage />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="randomQuiz" element={<RandomQuizPage />} />
          <Route path="favorites" element={<FavoritePage />} />
        </Route>
        <Route path="auth/*" element={<AuthPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
