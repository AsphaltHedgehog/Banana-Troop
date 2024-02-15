import { useNavigate } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import { logoutThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { LogoutButton } from "../../../shared/buttons/RegisterButton";
import {
  StyledCanceLink,
  StyledLogoutTitle,
  StyledLogoutWrapp,
  StyledText,
} from "../AuthPages.styled";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useModal();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutThunk()).unwrap();
    navigate("/");
  };

  return (
    <StyledLogoutWrapp>
      <StyledLogoutTitle>Log out</StyledLogoutTitle>
      <StyledText>Are you sure you want to log out of your account?</StyledText>
      <LogoutButton onClick={handleLogOut}>Log out</LogoutButton>
      <StyledCanceLink onClick={closeModal}>Cancel</StyledCanceLink>
    </StyledLogoutWrapp>
  );
};

export default Logout;
