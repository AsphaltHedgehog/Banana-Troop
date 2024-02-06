import { RegisterButton } from "../../../shared/buttons/RegisterButton";

const Login: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <h3>Login</h3>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <RegisterButton onSubmit={handleSubmit}>Enter</RegisterButton>
      </form>
      <a href="#">Restore password</a>
      <a href="#">Register</a>
    </div>
  );
};

export default Login;
