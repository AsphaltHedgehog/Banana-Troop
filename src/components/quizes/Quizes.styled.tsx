import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet, desktop } = breakpoints;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;

  text-align: left;
  margin-inline: auto;
  margin-bottom: 80px;

  @media screen and (min-width: ${tablet}) {
    max-width: 704px;

    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    max-width: 1240px;

    margin-bottom: 120px;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1875;
  letter-spacing: -0.01em;
  color: #f4f4f4;

  @media screen and (min-width: ${tablet}) {
    font-size: 44px;
    line-height: 1.09091;
  }
`;

export const StyledContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    justify-content: space-between;

    margin-top: 24px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 48px;
  }
`;

export const StyledP = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  color: #f4f4f4;

  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;

    max-width: 584px;

    margin-bottom: 0;
    /* margin-right: 70px; */
  }

  @media screen and (min-width: ${desktop}) {
    max-width: 660px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  text-decoration: underline;
  color: #f4f4f4;

  &:visited {
    color: #f4f4f4;
  }

  &:hover,
  &:focus {
    color: #205bf1;
  }
  transition-property: color;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;
  }
`;
