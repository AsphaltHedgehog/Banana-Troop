import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Register from "../../components/authPage/register/Register";
import Login from "../../components/authPage/login/Login";
import Logout from "../../components/authPage/logout/Logout";
import RestorePassword from "../../components/authPage/restorePassword/RestorePassword";
import NewPassword from "../../components/authPage/newPassword/NewPassword";
import Home from "../home/Home";
import Modal from "../../components/modal/Modal";

const  AuthPages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
 const params = useParams<{ resetToken: string }>();
  const resetToken = params.resetToken;

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/auth/")) {
      const page = path.substring(6);

      switch (page) {
        case "register":
          setModalContent(<Register />);
          break;
        case "login":
          setModalContent(<Login />);
          break;
        case "logout":
          setModalContent(<Logout />);
          break;
        case "restorePassword":
          setModalContent(<RestorePassword />);
          break;
        case "newPassword":
          setModalContent(<NewPassword/>);
          break;
        default:
          setModalContent(
            <div>
              <NewPassword />
            </div>
          );
          break;
      }
    }
  }, [location.pathname, resetToken]);

  return (
    <div>
      <Home />
      <Modal closeModal={() => navigate("/")}>{modalContent}</Modal>
    </div>
  );
};

export default AuthPages;
