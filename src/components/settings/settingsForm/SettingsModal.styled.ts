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
  gap: 32px;
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

export const SettingsFormButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px 16px 0px;
  border-radius: 30px;
  background-color: #205bf1;
  width: 295px;
  border: none;
  color: white;
`;
