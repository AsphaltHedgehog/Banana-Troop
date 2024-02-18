import { useNavigate } from "react-router-dom";
import { logoutThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { LogoutButton } from "../../../shared/buttons/RegisterButton";
import { toast } from "react-toastify";

import {
  StyledCanceLink,
  StyledLogoutTitle,
  StyledLogoutWrapp,
  StyledText,
} from "../AuthPages.styled";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      navigate("/");
      toast.success("Logout successful!");
    } catch (error) {
      navigate("/");
      toast.error("Something went wrong.");
    }
  };

  return (
    <StyledLogoutWrapp>
      <StyledLogoutTitle>Log out</StyledLogoutTitle>
      <StyledText>Are you sure you want to log out of your account?</StyledText>
      <LogoutButton onClick={handleLogOut}>Log out</LogoutButton>
      <StyledCanceLink onClick={() => navigate("/")}>Cancel</StyledCanceLink>
    </StyledLogoutWrapp>
  );
};

export default Logout;
