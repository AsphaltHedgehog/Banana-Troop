import { logoutThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      <h3>Log out</h3>
      <p>Are you sure you want to log out of your account?</p>
      <button onClick={handleLogOut}>Log out</button>
      <a href="#">Cancel</a>
    </div>
  );
};

export default Logout;
