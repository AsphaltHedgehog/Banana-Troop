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

  p {
    position: absolute;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    left: 68px;
  }
`;
