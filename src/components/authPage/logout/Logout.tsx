// import { useDispatch } from "react-redux";
// import { logoutThunk } from "../../../redux/auth/operations";

const Logout: React.FC = () => {
  // const dispatch = useDispatch();
  const handleLogOut = () => {
    // dispatch(logoutThunk());
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
