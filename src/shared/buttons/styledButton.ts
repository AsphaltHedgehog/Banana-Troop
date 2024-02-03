import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledChooseBtn = styled(Link)`
  border-radius: 30px;
  border-color: black;
  padding: 16px 32px;
  width: 165px;
  height: 48px;
  background: #205bf1;

  &:hover,
  &:focus {
    background-color: #144ad5;
    color: #f4f4f4;
  }

  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;

export const StyledCreateBtn = styled(Link)`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 16px 32px;
  width: 173px;
  height: 48px;

  &:hover,
  &:focus {
    border: 1px solid #f4f4f4;
    color: #f4f4f4;
  }

  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #f4f4f4;
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

  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #205bf1;
`;
