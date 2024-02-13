import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import CreateQuizPage from "../pages/CreateQuizPage/CreateQuizPage";

const QreateQuizProtectedPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <CreateQuizPage />;
};

export default QreateQuizProtectedPage;
