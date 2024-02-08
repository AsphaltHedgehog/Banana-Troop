import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import { loginThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../../helpers/schemas";

interface LoginFormData {
  name: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schemaRegister) });

  const submit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(submit)}>
        <input type="email" placeholder="Email" {...register("email")} />
        {errors?.email && <div>{errors.email.message}</div>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors?.password && <div>{errors.password.message}</div>}
        <RegisterButton onClick={handleSubmit(submit)}>Enter</RegisterButton>
      </form>
      <a href="#">Restore password</a>
      <a href="#">Register</a>
    </div>
  );
};

export default Login;
