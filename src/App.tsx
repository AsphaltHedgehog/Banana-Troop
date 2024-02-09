import { Routes, Route } from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import CreateQuizPage from "./pages/CreateQuizPage/CreateQuizPage";
import DiscoverPage from "./pages/Discover/DiscoverPage";
import RandomQuizPage from "./pages/RandomQuizPage";
import FavoritePage from "./pages/FavoritePage";
import Login from "./components/authPage/login/Login";
import Register from "./components/authPage/register/Register";
import ForAdults from "./components/forAdults/ForAdults";
import ForChildren from "./components/forChildren/ForChildren";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forAdults" element={<ForAdults />} />
          <Route path="forChildren" element={<ForChildren />} />
          <Route path="createQuiz" element={<CreateQuizPage />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="randomQuiz" element={<RandomQuizPage />} />
          <Route path="favorites" element={<FavoritePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
