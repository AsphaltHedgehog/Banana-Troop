import { RegisterButton } from "../../../shared/buttons/RegisterButton";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <h3>Sign Up</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <RegisterButton onSubmit={handleSubmit}>Enter</RegisterButton>
      </form>
      <a href="#">Login</a>
    </div>
  );
};

export default Register;
