import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import { FC } from "react";
import {
  StyledEmailError,
  StyledEmailValid,
  StyledNameError,
  StyledNameValid,
  StyledPasswordError,
  StyledPasswordValid,
  StyledSettingsInput,
} from "./SettingsInput.styled";

type FieldName = "name" | "email" | "password";

interface defaultValues {
  name: string;
  email: string;
  password?: string;
}

interface SettingsInputProps {
  type: string;
  placeholder: string;
  name: FieldName;
  defaultValues: defaultValues;
  errors: FieldErrors<Record<FieldName, FieldError>>;
  watch: UseFormWatch<Record<FieldName, string>>;
  register: UseFormRegister<Record<FieldName, string>>;
}

const SettingsInput: FC<SettingsInputProps> = ({
  type,
  placeholder,
  name,
  errors,
  watch,
  register,
  defaultValues,
}) => {
  const fieldName = watch(name)?.trim();
  const disabledInput = name === "email" || name === "password";

  return (
    <>
      <StyledSettingsInput
        type={type}
        placeholder={placeholder}
        {...register(name)}
        $error={errors[name]?.message}
        $inputValue={watch(name)}
        disabled={disabledInput}
        defaultValue={defaultValues[name]}
      />
      {name === "name" && (
        <>
          {errors?.name && (
            <StyledNameError>{errors.name.message as string}</StyledNameError>
          )}
          {!errors.name && fieldName && (
            <StyledNameValid>Valid name</StyledNameValid>
          )}
        </>
      )}
      {name === "email" && (
        <>
          {errors?.email && (
            <StyledEmailError>
              {errors.email.message as string}
            </StyledEmailError>
          )}
          {!errors.email && fieldName && (
            <StyledEmailValid>Valid email</StyledEmailValid>
          )}
        </>
      )}
      {name === "password" && (
        <>
          {errors?.password && (
            <StyledPasswordError>
              {errors.password.message as string}
            </StyledPasswordError>
          )}
          {!errors.password && fieldName && (
            <StyledPasswordValid>Valid password</StyledPasswordValid>
          )}
        </>
      )}
    </>
  );
};

export default SettingsInput;
