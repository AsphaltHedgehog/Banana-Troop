import { FC, useState } from "react";
import {
  StyledNameError,
  StyledNameValid,
  StyledSettingsInput,
  SvgValidation,
} from "./SettingsInput.styled";
import sprite from "../../../images/icons/sprite.svg";

type FieldName = "name" | "email" | "password";

interface defaultValues {
  name: string;
  email: string;
  password?: string;
}

interface SettingsInputProps {
  type: string;
  name: FieldName;
  defaultValues: defaultValues;
  value: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setStateName: React.Dispatch<React.SetStateAction<string>>;
}

const SettingsInput: FC<SettingsInputProps> = ({
  type,
  name,
  defaultValues,
  value,
  error,
  setStateName,
  setError,
}) => {
  const disabledInput = name === "email" || name === "password";

  const [focused, setFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    setStateName(inputValue);

    if (inputValue.length === 0) {
      setError("Field is required");
    } else if (inputValue.length > 32) {
      setError("Name cannot be longer than 32 characters");
    } else if (!/^[\p{L}0-9-]+$/u.test(inputValue)) {
      setError("Name can only contain letters, numbers, and dashes");
    } else {
      setError("");
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <>
      <StyledSettingsInput
        type={type}
        name={name}
        $inputValue={value}
        value={value}
        $error={error}
        onChange={handleChange}
        disabled={disabledInput}
        defaultValue={defaultValues[name]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {name === "name" && (
        <>
          {error && focused && (
            <>
              <StyledNameError>{error}</StyledNameError>
              <SvgValidation>
                <use xlinkHref={`${sprite}#icon-error`}></use>
              </SvgValidation>
            </>
          )}
          {!error && value && focused && (
            <>
              <StyledNameValid>Valid name</StyledNameValid>
              <SvgValidation>
                <use xlinkHref={`${sprite}#icon-valid`}></use>
              </SvgValidation>
            </>
          )}
        </>
      )}
      {/* {name === "email" && (
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
      )} */}
    </>
  );
};

export default SettingsInput;
