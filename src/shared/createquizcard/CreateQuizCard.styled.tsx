import styled from "styled-components";
import { breakpoints } from "../../styles";
import { NavLink } from "react-router-dom";
import Svg from "../svg/Svg";
const { tablet, desktop } = breakpoints;

export const StyledNavLink = styled(NavLink)`
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);

  padding-top: 136px;
  padding-inline: 108px;
  padding-bottom: 136px;

  &:hover,
  &:focus {
    background: #205bf1;
  }

  transition-property: background;

  @media screen and (min-width: ${tablet}) {
    padding-top: 134px;
    padding-inline: 98.5px;
    padding-bottom: 134px;

    width: 340px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-left: 81px;
    padding-right: 68px;

    width: 292px;
  }
`;

export const StyledSvg = styled(Svg)`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 12px;
  width: 48px;
  height: 48px;
`;

export const StyledP = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;

  margin-top: 16px;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
    line-height: 1.33333;
  }
`;
