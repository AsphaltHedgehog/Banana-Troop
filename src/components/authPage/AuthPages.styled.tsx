import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledRegisterWrapp = styled.div`
  margin: 60px 80px;
`;

export const StyledTitle = styled.h3`
  font-family: inherit;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33333;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 32px;
  margin-bottom: 16px;
  width: 314px;
`;

export const StyledAuthInput = styled.input`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding-left: 18px;
  height: 44px;
  background-color: transparent;
  color: #fafafa;

  &::placeholder {
    margin-left: 18px;
    white-space: nowrap;
  }
`;

export const AuthLink = styled(NavLink)`
  color: #f4f4f4 !important;
  text-decoration: underline;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  font-family: inherit;
`;

export const RestoreBtnStyled = styled.a`
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.5) !important;
  margin-bottom: 16px;
  text-align: center;
`;

export const StyledLogoutWrapp = styled.div`
  margin: 100px 80px;
`;

export const StyledLogoutTitle = styled.div``;

export const StyledText = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  text-align: center;
  color: #f4f4f4;
  margin-bottom: 16px;
`;
