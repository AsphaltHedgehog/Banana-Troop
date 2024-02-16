import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PrivatRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn: boolean = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/" />;
};

//треба написати правильний шлях навігації
