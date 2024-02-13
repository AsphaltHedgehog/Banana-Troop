import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { newPasswordThunk } from "../../../redux/auth/operations";
import { schemaNewPassword } from "../../../helpers/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  PasswordToggle,
  StyledAuthForm,
  StyledAuthInput,
  StyledTitle,
  WrapPass,
  WrapInPass,
  StyledError,
} from "../AuthPages.styled";
import { useAppDispatch } from "../../../redux/hooks";
import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import { StyledRestoreWrap } from "../restorePassword/RestorePassword.styled";
import { toast } from "react-toastify";
import sprite from "../../../images/icons/sprite.svg";
import Modal from "../../modal/Modal";

interface FormValues {
  newPassword: string;
  confirmPassword: string;
}

const NewPassword: React.FC = () => {
  const { resetToken = "" } = useParams<{ resetToken?: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schemaNewPassword),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const isPasswordValid = () => {
    return (
      password.length >= 8 && password.length <= 64 && !formErrors.newPassword
    );
  };
  const isConfirmPasswordValid = () => {
    return confirmPassword === password || confirmPassword === "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValue("newPassword", newPassword);
  };

  const onSubmit = async (data: FormValues) => {
    if (data.newPassword === data.confirmPassword) {
      try {
        await dispatch(
          newPasswordThunk({
            newPassword: data.newPassword,
            resetToken: resetToken,
          })
        );
        toast.success("Password changed successfully");
        navigate("/login");
      } catch (error) {
        toast.error("Failed to change password");
      }
    } else {
      toast.error("Passwords do not match");
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    setValue("confirmPassword", confirmPassword);
  };

  return (
    <Modal closeModal={() => navigate("/")}>
      <StyledRestoreWrap>
        <StyledTitle>New password</StyledTitle>
        <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
          <WrapPass>
            <WrapInPass>
              <StyledAuthInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("newPassword", {
                  required: "Enter a valid Password",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 64,
                    message: "Password cannot exceed 64 characters",
                  },
                })}
                onChange={handlePasswordChange}
                className={`${
                  password.length === 0
                    ? "empty"
                    : isPasswordValid()
                    ? "valid"
                    : "invalid"
                }`}
              />
              <PasswordToggle onClick={togglePasswordVisibility} type="button">
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
            <WrapInPass>
              <StyledAuthInput
                type={showPassword ? "text" : "password"}
                placeholder="Repeat password"
                {...register("confirmPassword", {
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 64,
                    message: "Password cannot exceed 64 characters",
                  },
                })}
                onChange={handleConfirmPasswordChange}
                className={`${
                  confirmPassword.length === 0
                    ? "empty"
                    : isConfirmPasswordValid()
                    ? "valid"
                    : "invalid"
                }`}
              />
              <PasswordToggle onClick={togglePasswordVisibility} type="button">
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
            {confirmPassword !== "" && confirmPassword !== password && (
              <StyledError>Passwords do not match</StyledError>
            )}
          </WrapPass>
          <RegisterButton onClick={handleSubmit(onSubmit)}>
            Enter
          </RegisterButton>
        </StyledAuthForm>
      </StyledRestoreWrap>
    </Modal>
  );
};

export default NewPassword;
