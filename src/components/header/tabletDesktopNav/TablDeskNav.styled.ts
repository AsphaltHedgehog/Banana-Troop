import { styled, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

interface OpenedUserWidgetProps {
  $isOpened: boolean;
}

export const NavLinkHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 46px;
`;

export const NavLinkHeader = styled(NavLink)`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #f4f4f499;

  &:visited {
    color: #f4f4f4;
  }
`;

export const UserWidgetWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0em;
  text-align: left;
  position: relative;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20%);
    opacity: 0;
  }
`;

export const OpenedUserWidget = styled.div<OpenedUserWidgetProps>`
  position: absolute;
  left: 0;
  top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background-color: #205bf1;
  max-width: 142px;
  padding: 24px 37px 24px 22px;
  border-radius: 20px;

  animation: ${({ $isOpened }) => ($isOpened ? slideIn : slideOut)} 0.5s
    ease-in-out;

  svg {
    width: 16px;
    height: 16px;
  }

  a {
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    text-decoration: none;
    gap: 8px;
    &:visited {
      color: #f4f4f4;
    }
  }
`;
