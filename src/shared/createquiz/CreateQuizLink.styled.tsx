import styled from "styled-components";
import { breakpoints } from "../../styles";
import Svg from "../svg/Svg";
import { Link } from "react-router-dom";

const { tablet } = breakpoints;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSvg = styled(Svg)`
  border: 1px solid #205bf1;
  border-radius: 30px;
  padding: 8px;
  width: 40px;
  height: 40px;

  stroke: #205bf1;

  transition-property: stroke border;

  @media screen and (min-width: ${tablet}) {
    padding: 12px;
    width: 48px;
    height: 48px;
  }
`;

export const StyledP = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;

  margin-left: 16px;

  transition-property: color;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
    line-height: 1.33333;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;

  &:visited {
    color: inherit;
  }

  &:hover p,
  &:focus p {
    color: #144ad5;
  }

  &:hover svg,
  &:focus svg {
    border-color: #144ad5;
  }

  &:hover use,
  &:focus use {
    stroke: #144ad5;
  }
`;
