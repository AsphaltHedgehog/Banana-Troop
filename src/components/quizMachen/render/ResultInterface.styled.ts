import styled from "styled-components";
import { breakpoints } from "../../../styles";

const { tablet } = breakpoints;

export const StyledResultContainer = styled.div`
  background-color: #205bf1;
  border-radius: 20px;
  margin: auto;
  padding: 80px 90px;

  @media screen and (min-width: ${tablet}) {
    padding: 60px 204px;
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
  margin-bottom: 32px;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
    line-height: 0.875;
  }
`;

export const StyledText = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
  margin-bottom: 12px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const StyledNumber = styled.p`
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: center;
  color: #f4f4f4;
  margin-bottom: 32px;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
    line-height: 1.33333;
  }
`;

export const StyledRating = styled.p`
  font-family: "Gilroy", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
  margin-bottom: 12px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 75px;
  }
`;
