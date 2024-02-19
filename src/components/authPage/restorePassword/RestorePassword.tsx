import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { resetPasswordThunk } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSendEmail } from "../../../helpers/schemas";
import { StyledAuthForm, StyledAuthInput } from "../AuthPages.styled";
import { RegisterButton } from "../../../shared/buttons/RegisterButton";
import {
  StyledBack,
  StyledEmail,
  StyledMainTitle,
  StyledNotification,
  StyledRestoreTitle,
  StyledRestoreWrap,
} from "./RestorePassword.styled";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface FormData {
  email: string;
}
interface CustomResponse {
  error?: {
    message: string;
  };
  type?: string;
  payload?: string;
  meta?: {
    aborted?: boolean;
    arg?: {
      email: string;
    };
    condition?: boolean;
    rejectedWithValue?: boolean;
    requestId?: string;
    requestStatus?: string;
  };
}

const RestorePassword: React.FC = () => {
  const { register, reset, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schemaSendEmail),
  });
  const dispatch = useAppDispatch();

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [isEmailError, setIsEmailError] = useState(false);

  const handleSubmitEmail: SubmitHandler<FormData> = async (data) => {
    try {
      dispatch(resetPasswordThunk(data)).then((response) => {
        reset();
        const customResponse = response as CustomResponse;
        if (customResponse.error) {
          setIsEmailError(true);
          return;
        }
        setEmail(data.email);
        setIsEmailSent(true);
      });
    } catch (error) {
      if (
        (error as AxiosError).response &&
        (error as AxiosError).response?.status === 400
      ) {
        setIsEmailSent(false);
      } else {
        toast.error(`Error occurred: ${error}`);
      }
    }
  };
  return (
    <React.Fragment>
      <StyledRestoreWrap>
        {isEmailSent ? (
          <div>
            <StyledRestoreTitle>Restore password</StyledRestoreTitle>
            <StyledNotification>
              <StyledEmail>{email}</StyledEmail> successfully delivered. Go to
              the post office and follow the instructions in the letter received
              from us.
            </StyledNotification>
            <StyledBack href="/">To main page</StyledBack>
          </div>
        ) : (
          <React.Fragment>
            <StyledMainTitle>Enter email for restore password</StyledMainTitle>
            <StyledAuthForm onSubmit={handleSubmit(handleSubmitEmail)}>
              <StyledAuthInput
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                style={{ borderColor: isEmailError ? "red" : "initial" }}
              />
              {isEmailError && (
                <p style={{ color: "red" }}>Input value cannot be empty</p>
              )}
              <RegisterButton onClick={handleSubmit(handleSubmitEmail)}>
                Enter
              </RegisterButton>
            </StyledAuthForm>
            <StyledBack href="/auth/login">Back</StyledBack>
          </React.Fragment>
        )}
      </StyledRestoreWrap>
    </React.Fragment>
  );
};

export default RestorePassword;
