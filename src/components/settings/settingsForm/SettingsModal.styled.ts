import { styled } from "styled-components";

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

  input {
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
    border: 1px solid #f4f4f44d;
  }

  p {
    position: absolute;
    color: #e74a3b;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    left: 68px;
  }
`;

export const StyledNameError = styled.p`
  top: 50px;
`;

export const StyledEmailError = styled.p`
  top: 120px;
`;

export const StyledPasswordError = styled.p`
  top: 188px;
`;
