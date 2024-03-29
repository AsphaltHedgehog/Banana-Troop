import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

const { tablet } = breakpoints;

export const SettingsHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 40px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 96px;
    gap: 16px;
  }

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
  }
`;

export const SettingMainWrapper = styled.div`
  padding: 48px 20px 28px 20px;

  @media screen and (min-width: ${tablet}) {
    padding: 56px 32px;
  }
`;
