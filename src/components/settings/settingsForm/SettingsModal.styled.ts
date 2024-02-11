import { styled, css } from "styled-components";

interface SettingsInputProps {
  $error?: string;
  $nameValue?: string;
  $isValidNameValue: boolean;
}

export const SettingsPhotoWrapper = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;

  p {
    position: absolute;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    left: 68px;
  }
`;

export const SettingsInput = styled.input<SettingsInputProps>`
  color: white;
  width: 295px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  letter-spacing: -0.01em;
  text-align: left;
  padding: 14px 18px;
  border-radius: 30px;
  border: 1px solid ${({ $error }) => ($error ? "#e74a3b" : "#f4f4f44d")};
  /* outline: none; */

  &:focus {
    border: 1px solid white;
    ${({ $error, $nameValue, $isValidNameValue }) =>
      !$error &&
      $nameValue &&
      $isValidNameValue &&
      css`
        border: 1px solid #097b45;
      `}
    ${({ $error, $isValidNameValue, $nameValue }) =>
      ($error || $nameValue) &&
      !$isValidNameValue &&
      css`
        border: 1px solid #e74a3b;
      `}
  }

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
