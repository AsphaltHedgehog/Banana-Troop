import { styled, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

interface SVGChevronDownProps {
  $isOpened: boolean;
}

interface OpenedUserWidgetProps {
  $isOpened: boolean;
  $linkClicked: boolean;
}

interface NavLinkHeaderProps {
  $colored?: string;
}
interface NavLinkCategoryHeaderProps {
  active?: string;
}

export const CategoriesWrapperTablDesk = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NavLinksAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavLinkHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NavLinkHeader = styled(NavLink)<NavLinkHeaderProps>`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #f4f4f499;

  &.active {
    color: #f4f4f4;
  }

  &:visited {
    color: #f4f4f499;
  }
`;

export const NavLinkCategoryHeader = styled(
  NavLink
)<NavLinkCategoryHeaderProps>`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ active }) => (active === "true" ? "#ffffff" : "#f4f4f499")};

  &:visited {
    color: #f4f4f499;
  }
`;

export const NavLinkHeaderRegister = styled(NavLink)`
  color: white;
  border-radius: 30px;
  padding: 16px 32px;
  border: solid 1px white;
`;

export const NavLinkHeaderLogin = styled(NavLink)`
  color: white;
  font-weight: 700;
  text-decoration: underline;
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
`;

export const SVGChevronDown = styled.svg<SVGChevronDownProps>`
  width: 28px;
  height: 28px;
  transform: ${({ $isOpened }) =>
    $isOpened ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.5s ease-in-out;
`;

const slideIn = keyframes`
  from {
    transform: translateY(-15%);
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
    transform: translateY(-15%);
    opacity: 0;
  }
`;

export const OpenedUserWidget = styled.div<OpenedUserWidgetProps>`
  position: absolute;
  left: 0;
  top: 48px;
  display: ${({ $linkClicked }) => ($linkClicked ? "flex" : "none")};
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
