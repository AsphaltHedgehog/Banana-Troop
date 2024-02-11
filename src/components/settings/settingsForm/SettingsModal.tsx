import { FC, useEffect, useState } from "react";
import sprite from "../../../images/icons/sprite.svg";
import {
  SettingsForm,
  SettingsInput,
  SettingsPhotoWrapper,
  StyledEmailError,
  StyledEmailValid,
  StyledNameError,
  StyledNameValid,
  StyledPasswordError,
  StyledPasswordValid,
} from "./SettingsModal.styled";
// import { useAppDispatch } from "../../../redux/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSettingsInput } from "../../../helpers/schemas";

const SettingsModal: FC = () => {
  // const dispatch = useAppDispatch();
  const [isValidNameValue, setIsValidNameValue] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schemaSettingsInput),
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const passwordValue = watch("password");

  useEffect(() => {
    if (nameValue?.length >= 1 && nameValue?.length <= 32) {
      setIsValidNameValue(true);
    } else {
      setIsValidNameValue(false);
    }
  }, [nameValue?.length]);

  const submit = () => {
    reset();
  };

  return (
    <>
      <SettingsPhotoWrapper>
        <img src="" alt="" />
        <svg>
          <use xlinkHref={`${sprite}#icon-plus-photo`}></use>
        </svg>
      </SettingsPhotoWrapper>
      <SettingsForm onSubmit={handleSubmit(submit)}>
        <SettingsInput
          type="text"
          placeholder="Name"
          {...register("name")}
          $error={errors.name?.message}
          $nameValue={nameValue}
          $isValidNameValue={isValidNameValue}
        />
        {(errors?.name || !isValidNameValue) && (
          <StyledNameError>
            {errors.name?.message ||
              (nameValue && "The name length must be from 8 to 32 characters")}
          </StyledNameError>
        )}
        {!errors.name && nameValue && isValidNameValue && (
          <StyledNameValid>Valid name</StyledNameValid>
        )}
        <SettingsInput
          type="text"
          placeholder="Email"
          {...register("email")}
          $error={errors.email?.message}
        />
        {errors?.email && (
          <StyledEmailError>{errors.email.message}</StyledEmailError>
        )}
        {!errors.email && emailValue && (
          <StyledEmailValid>Valid email</StyledEmailValid>
        )}
        <SettingsInput
          type="text"
          placeholder="Password"
          {...register("password")}
          $error={errors.password?.message}
        />
        {errors?.password && (
          <StyledPasswordError>{errors.password.message}</StyledPasswordError>
        )}
        {!errors.password && passwordValue && (
          <StyledPasswordValid>Valid password</StyledPasswordValid>
        )}
        <button>Save</button>
      </SettingsForm>
    </>
  );
};

export default SettingsModal;
