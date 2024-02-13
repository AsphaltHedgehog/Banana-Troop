import { useNavigate } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import { logoutThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import {
  StyledLogoutWrapp,
  StyledText,
  StyledTitle,
} from "../AuthPages.styled";
import Modal from "../../modal/Modal";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useModal();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutThunk()).unwrap();
    navigate("/");
  };

  return (
    <Modal closeModal={() => navigate("/")}>
      <StyledLogoutWrapp>
        <StyledTitle>Log out</StyledTitle>
        <StyledText>
          Are you sure you want to log out of your account?
        </StyledText>
        <RegisterButton onClick={handleLogOut}>Log out</RegisterButton>
        <a onClick={closeModal}>Cancel</a>
      </StyledLogoutWrapp>
    </Modal>
  );
};

export default Logout;
