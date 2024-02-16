import styled from "styled-components";
import { breakpoints } from "../../../styles";

const { tablet } = breakpoints;

export const AnswerButton = styled.button`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  width: 295px;
  padding: 14px 18px;
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  text-align: left;

  @media screen and (min-width: ${tablet}) {
    width: 222px;
  }
`;
