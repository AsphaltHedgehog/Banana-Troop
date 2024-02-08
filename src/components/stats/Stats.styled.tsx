import styled from "styled-components";
import { breakpoints } from "../../styles";
import { NavLink } from "react-router-dom";

import statssplash1x from "../../images/stats-component/stats_splash.png";
import statssplash2x from "../../images/stats-component/stats_splash@2x.png";
import statssplash1xWebP from "../../images/stats-component/stats_splash.webp";
import statssplash2xWebP from "../../images/stats-component/stats_splash@2x.webp";
import statssplash1xAVIF from "../../images/stats-component/stats_splash.avif";
import statssplash2xAVIF from "../../images/stats-component/stats_splash@2x.avif";

const { tablet, desktop } = breakpoints;

export const StyledSection = styled.footer`
  width: 100%;

  background-color: #205bf1;

  background-image: image-set(
    url(${statssplash1xAVIF}) type("image/avif") 1x,
    url(${statssplash2xAVIF}) type("image/avif") 2x,
    url(${statssplash1xWebP}) type("image/webp") 1x,
    url(${statssplash2xWebP}) type("image/webp") 2x,
    url(${statssplash1x}) type("image/png") 1x,
    url(${statssplash2x}) type("image/png") 2x
  );
  background-repeat: no-repeat;
  background-size: 333px 346px;
  background-position: bottom -21px left -53px;

  padding-top: 64px;
  padding-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    padding-right: 32px;

    background-position: bottom -32px left -29px;
  }

  @media screen and (min-width: ${desktop}) {
    background-position: bottom -32px left -19px;
  }
`;

export const StyledContainer = styled.div`
  margin-bottom: 273px;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-end;

    margin-bottom: 110px;
  }

  @media screen and (min-width: ${desktop}) {
    display: block;
  }
`;

export const StyledNumber = styled.p`
  font-weight: 700;
  font-size: 44px;
  line-height: 1.09091;
  letter-spacing: -0.01em;

  margin-bottom: 10px;

  @media screen and (min-width: ${tablet}) {
    font-size: 120px;
    line-height: 0.91667;
  }

  @media screen and (min-width: ${desktop}) {
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const StyledDescr = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) and (max-width: ${desktop}) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 40px;
  }
`;

export const StyledCopyright = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.42857;

  margin-bottom: 10px;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;

  :not(:last-child) {
    margin-right: 14px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;

  opacity: 0.5;

  color: #f4f4f4;

  &:visited {
    color: #f4f4f4;
  }

  &:hover,
  &:focus {
    opacity: 0.9;
  }

  transition-property: opacity;
`;
