import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import { loginThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../helpers/schemas";
import {
  AuthLink,
  RestoreBtnStyled,
  StyledAuthForm,
  StyledAuthInput,
  StyledRegisterWrapp,
  StyledTitle,
} from "../AuthPages.styled";
import { useNavigate } from "react-router-dom";
import Modal from "../../modal/Modal";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(schemaLogin) });

  const submit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(loginThunk(data)).unwrap();
    reset();
    navigate("/");
  };

  return (
    <Modal closeModal={() => navigate("/")}>
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
        <RestoreBtnStyled href="/restorePassword">
          Restore password
        </RestoreBtnStyled>
        <AuthLink to="/register">Register</AuthLink>
      </StyledRegisterWrapp>
    </Modal>
  );
};

export default Login;
