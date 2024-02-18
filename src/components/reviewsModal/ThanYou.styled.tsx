import styled from "styled-components";

import { breakpoints } from "../../styles";

const { desktop } = breakpoints;

export const StyledThanYouSection = styled.section`
  margin: 0 auto;
  padding: 20px 130px;
  text-align: center;
  width: 335px;
  height: 404px;
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 20px;
  background: #1c1c1c;
  @media screen and (min-width: ${desktop}) {
    padding: 60px 80px;
    width: 452px;
    height: 408px;
    padding: 120px 100px;
  }
`;
export const StyledThanYouTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.01em;
    text-align: center;
    color: rgba(244, 244, 244, 0.6);
    margin-bottom: 32px;
  }
`;
export const StyledThanYouButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  padding: 16px 13px;
  margin-top: 18px;
  width: 100%;

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
`;
