import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import { loginThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../../helpers/schemas";
import {
  AuthLink,
  RestoreBtnStyled,
  StyledAuthForm,
  StyledAuthInput,
  StyledRegisterWrapp,
  StyledTitle,
} from "../AuthPages.styled";

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
    <StyledRegisterWrapp>
      <StyledTitle>Login</StyledTitle>
      <StyledAuthForm onSubmit={handleSubmit(submit)}>
        <StyledAuthInput
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors?.email && <div>{errors.email.message}</div>}
        <StyledAuthInput
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors?.password && <div>{errors.password.message}</div>}
        <RegisterButton onClick={handleSubmit(submit)}>Enter</RegisterButton>
      </StyledAuthForm>
      <RestoreBtnStyled href="/restorePassword">Restore password</RestoreBtnStyled>
      <AuthLink href="#">Register</AuthLink>
    </StyledRegisterWrapp>
  );
};

export default Login;
