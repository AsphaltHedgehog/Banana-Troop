// import { useDispatch } from "react-redux";
// import { RegisterButton } from "../../../shared/buttons/RegisterButton";
// import { registerThunk } from "../../../redux/auth/operations";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = (data) => {
  //   dispatch(registerThunk(data));
  // };

  return (
    <div>
      <h3>Sign Up</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <RegisterButton onSubmit={handleSubmit}>Enter</RegisterButton> */}
      </form>
      <a href="#">Login</a>
    </div>
  );
};

export default Register;
