import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #205bf1;
  min-height: 100vh;
  min-width: 100vw;
  padding: 20px;
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
`;

export const NavLinkRegister = styled(NavLink)`
  border-radius: 30px;
  padding: 16px 32px;
  border: solid 1px white;
`;

export const NavLinkLogin = styled(NavLink)`
  text-decoration: underline;
`;
