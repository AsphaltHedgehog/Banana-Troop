import { logoutThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import {
  StyledLogoutWrapp,
  StyledText,
  StyledTitle,
} from "../AuthPages.styled";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <StyledLogoutWrapp>
      <StyledTitle>Log out</StyledTitle>
      <StyledText>Are you sure you want to log out of your account?</StyledText>
      <RegisterButton onClick={handleLogOut}>Log out</RegisterButton>
      <a href="#">Cancel</a>
    </StyledLogoutWrapp>
  );
};

export default Logout;
