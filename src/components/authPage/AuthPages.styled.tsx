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
  position: relative;
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding-left: 18px;
  height: 44px;
  background-color: transparent;
  color: #fafafa;
  width: 314px;
  
  && {
    background-color: #0c0d0d;
    color: rgba(250, 250, 250, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.2);
    outline: none;

    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }

    &:hover {
      border-color: #0ef387;
    }

    &.valid {
      border-color: #0ef387;
    }

    &.invalid {
      border-color: #e74a3b;
    }

    &::placeholder {
      margin-left: 18px;
      white-space: nowrap;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fafafa !important;
    caret-color: #fafafa !important;
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

export const StyledModal = styled.div`
  position: relative;
  background-color: black;
  width: 500px;
  z-index: 6000000000;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  
  /* Задаємо розміри для SVG */
  svg {
    width: 18px;
    height: 18px;
  }
`
export const WrapPass = styled.div`
   display: flex;
  flex-direction: column;
  gap: 14px
`
export const WrapInPass = styled.div`
position: relative;
`

export const StyledError = styled.p`
font-weight: 400;
  font-size: 10px;
  text-align: left;
  color: #e74a3b;
  margin-left: 18px ;`
