import { Routes, Route } from "react-router-dom";

// components
import Layout from './components/layout/Layout'
import Home  from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'

// css
import "./App.css";
import CreateQuizPage from "./pages/CreateQuizPage/CreateQuizPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="createQuiz" element={<CreateQuizPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
