import { styled } from "styled-components";
export const SettingsHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: 0em;

    gap: 6px;
    color: white;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.01em;
    margin-bottom: 40px;
  }
`;

export const SettingMainWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 28px;
`;
