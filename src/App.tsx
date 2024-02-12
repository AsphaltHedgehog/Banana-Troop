import { Routes, Route } from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import DiscoverPage from "./pages/Discover/DiscoverPage";
import RandomQuizPage from "./pages/RandomQuizPage";
import FavoritePage from "./pages/FavoritePage";
// import Login from "./components/authPage/login/Login";
// import Register from "./components/authPage/register/Register";
// import Logout from "./components/authPage/logout/Logout";
import ForAdults from "./components/forAdults/ForAdults";
import ForChildren from "./components/forChildren/ForChildren";
import RestorePassword from "./components/authPage/restorePassword/RestorePassword";
import NewPassword from "./components/authPage/newPassword/NewPassword";

// css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import Settings from "./components/settings/wholeComponent/Settings";
import QreateQuizProtectedPage from "./routes/QreateQuizProtectedPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} /> */}
          <Route path="restorePassword" element={<RestorePassword />} />
          <Route path="newPassword/:resetToken" element={<NewPassword />} />
          <Route path="forAdults" element={<ForAdults />} />
          <Route path="forChildren" element={<ForChildren />} />
          <Route path="createQuiz" element={<QreateQuizProtectedPage />} />
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
