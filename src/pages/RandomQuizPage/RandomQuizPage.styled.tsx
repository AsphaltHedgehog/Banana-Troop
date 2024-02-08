import styled from "styled-components";
import { breakpoints } from "../../styles";
import Box from "../../components/box/Box";

const { tablet, desktop } = breakpoints;

export const StyledBox = styled(Box)`
  padding-top: 132px;
  padding-bottom: 80px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 175px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-top: 168px;
  }
`;

export const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 335px;

  @media screen and (min-width: ${tablet}) {
    max-width: 704px;
  }

  @media screen and (min-width: ${desktop}) {
    max-width: 1240px;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1875;
  letter-spacing: -0.01em;

  text-align: left;

  @media screen and (min-width: ${tablet}) {
    font-size: 44px;
    line-height: 1.09091;
  }
`;

export const StyledP = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  text-align: left;

  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;

    max-width: 532px;

    margin-top: 24px;
    margin-bottom: 28px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;

    gap: 48px 24px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  text-decoration: underline;
  color: #f4f4f4;

  margin-top: 40px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;

    margin-top: 48px;
  }
`;
