import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #205bf1;
  min-height: 100vh;
  min-width: 100vw;
  padding: 24px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  a {
    color: white;
    font-size: 14px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.28;
  gap: 20px;
  justify-content: center;
  align-items: center;

  a {
    font-weight: 400;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 16px;
  line-height: 1;
  justify-content: center;
  align-items: center;
  a {
    font-weight: 700;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const NavLinkRegister = styled(NavLink)`
  border-radius: 30px;
  padding: 16px 32px;
  border: solid 1px white;
`;

export const NavLinkLogin = styled(NavLink)`
  text-decoration: underline;
`;

export const NavLinkSettings = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  gap: 5px;
`;

export const LogOutButton = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  gap: 5px;
  border: none;
  color: white;
  padding: 0.6em 1.2em;
  background-color: transparent;
`;
