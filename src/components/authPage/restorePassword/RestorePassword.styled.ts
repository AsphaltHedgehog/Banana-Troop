import styled from "styled-components";
import { breakpoints } from "../../../styles";

const { tablet } = breakpoints;

export const StyledBack = styled.a`
  color: #f4f4f4 !important;
  text-decoration: underline;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  font-family: inherit;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const StyledRestoreWrap = styled.div`
  margin: 40px 20px;

  @media screen and (min-width: ${tablet}) {
    margin: 80px 80px;
  }
`;

export const StyledMainTitle = styled.h3`
  font-family: inherit;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: #f4f4f4;

  @media screen and (min-width: ${tablet}) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const StyledRestoreTitle = styled.h2`
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  padding-bottom: 32px;
`;

export const StyledNotification = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  text-align: center;
  color: rgba(244, 244, 244, 0.5);
  padding-bottom: 32px;
`;

export const StyledEmail = styled.span`
  color: #f4f4f4;
`;
