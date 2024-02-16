import styled from "styled-components";
import { breakpoints } from "../../../styles";

const { tablet } = breakpoints;

export const StyledResultContainer = styled.div`
  width: 336px;
  height: 424px;
  background-color: #205bf1;
  border-radius: 20px;
  margin: auto;
  padding: 80px 90px;

  @media screen and (min-width: ${tablet}) {
    width: 580px;
    height: 448px;
  }
`;

export const ResultTitle = styled.p`
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  text-align: center;
  color: #f4f4f4;
  margin-bottom: 34px;
`;
