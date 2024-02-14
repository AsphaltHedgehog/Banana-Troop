import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet } = breakpoints;

export const StyledChooseBtn = styled(Link)`
  border-radius: 30px;
  padding: 16px 13px;

  background: #f4f4f4;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #205bf1;

  &:visited {
    color: #205bf1;
  }

  &:hover,
  &:focus {
    color: #144ad5;
  }

  transition-property: color;

  @media screen and (min-width: ${tablet}) {
    padding: 16px 32px;
    font-size: 16px;
    line-height: 1;
  }
`;

export const StyledCreateBtn = styled.button`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 16px 13px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;

  color: #f4f4f4;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #d4d4d4;
    border-color: #787878;
  }

  transition-property: color, border-color;

  @media screen and (min-width: ${tablet}) {
    padding: 16px 32px;
    font-size: 16px;
    line-height: 1;
  }
`;

export const StyledStartBtn = styled(Link)`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 16px 13px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;

  color: #f4f4f4;
  background-color: transparent;

  &:visited {
    color: #f4f4f4;
  }
  &:hover,
  &:focus {
    color: #d4d4d4;
    border-color: #787878;
  }

  transition-property: color, border-color;

  @media screen and (min-width: ${tablet}) {
    padding: 16px 32px;
    font-size: 16px;
    line-height: 1;
  }
`;

export const WhiteChooseBtn = styled(Link)`
  border-radius: 30px;
  padding: 16px 32px;
  width: 165px;
  height: 48px;
  background: #f4f4f4;

  &:hover,
  &:focus {
    border: 1px solid #f4f4f4;
    color: #144ad5;
  }

  transition-property: border, color;

  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #205bf1;
`;

export const StyledChooseWhiteBtn = styled(Link)`
  border-radius: 30px;
  padding: 16px 13px;

  background: #205bf1;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;

  color: #fff;

  &:visited {
    background: #144ad5;
  }

  &:hover,
  &:focus {
    background: #144ad5;
  }

  transition-property: background;

  @media screen and (min-width: ${tablet}) {
    padding: 16px 32px;
    font-size: 16px;
    line-height: 1;
  }
`;

export const RegisterStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  padding: 16px 13px;
  margin-top: 18px;
  width: 295px;

  background: #205bf1;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;

  color: #fff;

  border: transparent;

  &:visited {
    background: #144ad5;
  }

  &:hover,
  &:focus {
    background: #144ad5;
    transition: background 0.3s ease-in-out;
  }

  transition-property: background;

  @media screen and (min-width: ${tablet}) {
    padding: 16px 32px;
    font-size: 16px;
    line-height: 1;
  }
`;
