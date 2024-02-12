import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import { registerThunk } from "../../../redux/auth/operations";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../../helpers/schemas";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";

import {
  AuthLink,
  StyledAuthForm,
  StyledAuthInput,
  StyledRegisterWrapp,
  StyledTitle,
} from "../AuthPages.styled";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../modal/Modal";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schemaRegister),
  });

  const submit: SubmitHandler<RegisterFormData> = (data) => {
    dispatch(registerThunk(data)).unwrap();
    reset();
    closeModal();
    navigate("/");
  };

  return (
    <Modal closeModal={closeModal}>
      <StyledRegisterWrapp>
        <StyledTitle>Sign Up</StyledTitle>
        <StyledAuthForm onSubmit={handleSubmit(submit)}>
          <StyledAuthInput
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          {errors?.name && <div>{errors.name.message}</div>}
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
          <RegisterButton onClick={handleSubmit(submit)}>
            Register
          </RegisterButton>
        </StyledAuthForm>
        <AuthLink>Login</AuthLink>
      </StyledRegisterWrapp>
    </Modal>
  );
};

export default Register;
