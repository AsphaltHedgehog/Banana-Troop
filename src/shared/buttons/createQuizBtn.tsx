import { StyledCreateBtn } from "./styledButton";
import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactElement } from "react";
// Вказати шлях до сторінки створення квізів

interface ICreateButton {
  children: ReactElement;
}

export function CreateButton({ children }: ICreateButton) {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event && isLoggedIn) {
      return navigate("/createQuiz");
    }
    return toast.error("You have to be logged in to do that!");
  };

  return (
    <StyledCreateBtn type="button" onClick={handleClick}>
      {children}
    </StyledCreateBtn>
  );
}
