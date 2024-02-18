import styled from "styled-components";
import { breakpoints } from "../../../styles";

const { tablet } = breakpoints;

export const StyledResultContainer = styled.div`
  position: relative;

  background-color: #205bf1;
  border-radius: 20px;
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

export const ResultCloseBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;

  top: 18px;
  right: 20px;

  svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${tablet}) {
    width: 28px;
    height: 28px;

    top: 24px;
    right: 26px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
