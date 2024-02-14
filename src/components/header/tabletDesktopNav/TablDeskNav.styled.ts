import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

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
