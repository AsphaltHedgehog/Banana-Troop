// import { useDispatch } from "react-redux";
// import { RegisterButton } from "../../../shared/buttons/RegisterButton";
// import { loginThunk } from "../../../redux/auth/operations";

const Login: React.FC = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = (data) => {
  // dispatch(loginThunk(data));
  // };

  return (
    <div>
      <h3>Login</h3>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <RegisterButton onSubmit={handleSubmit}>Enter</RegisterButton> */}
      </form>
      <a href="#">Restore password</a>
      <a href="#">Register</a>
    </div>
  );
};

export default Login;
