import styled from "styled-components";
import { breakpoints } from "../../styles";
import Box from "../../components/box/Box";
import { NavLink } from "react-router-dom";

const { tablet, desktop } = breakpoints;

export const StyledBox = styled(Box)`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 88px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-top: 100px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1875;
  letter-spacing: -0.01em;

  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    font-size: 44px;
    line-height: 1.09091;

    margin-bottom: 0px;
  }
`;

export const StyledContainer2 = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;

  @media screen and (min-width: ${tablet}) {
    margin-top: 48px;
  }

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const StyledUserWrapper = styled.div`
  border-radius: 20px;
  background: #205bf1;

  padding-top: 32px;
  padding-bottom: 32px;
  padding-inline: 32px;

  @media screen and (min-width: ${desktop}) {
    padding-top: 42px;
    padding-inline: 64px;
    padding-bottom: 58px;
  }
`;

export const StyledUserAvatar = styled.img`
  border-radius: 100px;
  width: 100px;
  height: 100px;

  margin-bottom: 8px;
`;

export const StyledUserName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
    line-height: 1.33333;
  }
`;

export const StyledP = styled.p`
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  text-align: center;
  color: rgba(244, 244, 244, 0.6);
  margin-bottom: 10px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 32px;
  gap: 32px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: ${desktop}) {
    flex-direction: column;
  }
`;

export const StyledLi = styled.li`
  position: relative;
  &:not(:last-child)::after {
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -16px;
    left: 0;
    content: "";
    background-color: rgba(244, 244, 244, 0.2);

    @media screen and (min-width: ${tablet}) {
      width: 1px;
      height: 100%;
      bottom: 0;
      left: calc(100% + 16px);
    }

    @media screen and (min-width: ${desktop}) {
      width: 100%;
      height: 1px;
      bottom: -16px;
      left: 0;
    }
  }
`;

export const StyledSideWrapper = styled.div`
  @media screen and (min-width: ${desktop}) {
    flex-grow: 1;
  }
`;

export const StyledLastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 80px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 0px;
  }
`;

export const StyledH3 = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
    line-height: 1.33333;
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
