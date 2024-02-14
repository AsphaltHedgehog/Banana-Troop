import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import { loginThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../helpers/schemas";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AuthLink,
  PasswordToggle,
  RestoreBtnStyled,
  StyledAuthForm,
  StyledAuthInput,
  StyledRegisterWrapp,
  StyledTitle,
  WrapInPass,
} from "../AuthPages.styled";
import sprite from "../../../images/icons/sprite.svg";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormData>({ resolver: yupResolver(schemaLogin) });
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const isPasswordValid = () => {
    return (
      password.length >= 8 && password.length <= 64 && !errors.password
    );
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setValue("password", passwordValue);
  };

  const submit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(loginThunk(data)).unwrap();
    reset();
    navigate("/");
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
        <WrapInPass>
          <StyledAuthInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            onChange={handlePasswordChange}
            className={`${
              password.length === 0
                ? "empty"
                : isPasswordValid()
                ? "valid"
                : "invalid"
            }`}
          />
          <PasswordToggle onClick={() => togglePasswordVisibility()} type="button">
            {showPassword ? (
              <svg>
                <use
                  xlinkHref={`${sprite}#icon-eye`}
                  width={18}
                  height={18}
                ></use>
              </svg>
            ) : (
              <svg>
                <use
                  xlinkHref={`${sprite}#icon-eye-off`}
                  width={18}
                  height={18}
                ></use>
              </svg>
            )}
          </PasswordToggle>
        </WrapInPass>
        {errors?.password && <div>{errors.password.message}</div>}
        <RegisterButton onClick={handleSubmit(submit)}>Enter</RegisterButton>
      </StyledAuthForm>
      <RestoreBtnStyled href="/auth/restorePassword">
        Restore password
      </RestoreBtnStyled>
      <AuthLink to="/auth/register">Register</AuthLink>
    </StyledRegisterWrapp>
  );
};

export default Login;
