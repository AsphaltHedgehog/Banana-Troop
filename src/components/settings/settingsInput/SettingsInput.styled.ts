import { FieldError } from "react-hook-form";
import { styled, css, keyframes } from "styled-components";

interface StyledSettingsInputProps {
  $error?: string | FieldError;
  $inputValue?: string;
}

export const StyledSettingsInput = styled.input<StyledSettingsInputProps>`
  color: white;
  width: 295px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  letter-spacing: -0.01em;
  text-align: left;
  padding: 14px 49px 14px 18px;
  border-radius: 30px;
  border: 1px solid ${({ $error }) => ($error ? "#e74a3b" : "#f4f4f44d")};

  &:focus {
    border: 1px solid white;
    ${({ $error, $inputValue }) =>
      !$error &&
      $inputValue?.trim() &&
      css`
        border: 1px solid #097b45;
      `}
    ${({ $error }) =>
      $error &&
      css`
        border: 1px solid #e74a3b;
      `}
  }

  ${({ $error, $inputValue }) =>
    !$error &&
    $inputValue?.trim() &&
    css`
      border: 1px solid #097b45;
    `}

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export const StyledNameError = styled.p`
  color: #e74a3b;
  top: 50px;
`;

export const StyledEmailError = styled.p`
  color: #e74a3b;
  top: 120px;
`;

export const StyledPasswordError = styled.p`
  color: #e74a3b;
  top: 188px;
`;

export const StyledNameValid = styled.p`
  color: #097b45;
  top: 50px;
`;
export const StyledEmailValid = styled.p`
  color: #097b45;
  top: 120px;
`;
export const StyledPasswordValid = styled.p`
  color: #097b45;
  top: 188px;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    right: 26px;
  }
  to {
    opacity: 1;
    right: 40px;
  }
`;

export const SvgValidation = styled.svg`
  right: 40px;
  top: 14px;
  width: 18px;
  height: 18px;
  position: absolute;
  animation: ${slideIn} 1s ease-in-out forwards;
`;
