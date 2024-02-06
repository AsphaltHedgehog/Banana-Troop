import styled from "styled-components";
import { breakpoints } from "../../styles";

import splash_mobi1x from "../../images/hero/splash_mobi1x.png";
import splash_mobi2x from "../../images/hero/splash_mobi2x.png";
import splash_mobi1x_wbp from "../../images/hero/splash_mobi1x.webp";
import splash_mobi2x_wbp from "../../images/hero/splash_mobi2x.webp";

import splash_tablet1x from "../../images/hero/splash_tablet1x.png";
import splash_tablet2x from "../../images/hero/splash_tablet2x.png";
import splash_tablet1x_wbp from "../../images/hero/splash_mobi1x.webp";
import splash_tablet2x_wbp from "../../images/hero/splash_mobi2x.webp";

import splash_desktop1x from "../../images/hero/splash_desktop1x.png";
import splash_desktop2x from "../../images/hero/splash_desktop2x.png";
import splash_desktop1x_wbp from "../../images/hero/splash_desktop1x.webp";
import splash_desktop2x_wbp from "../../images/hero/splash_desktop2x.webp";

const { tablet, desktop } = breakpoints;

export const StyledBgrImg = styled.section`
  background-image: image-set(
    url(${splash_mobi1x_wbp}) type("image/webp") 1x,
    url(${splash_mobi2x_wbp}) type("image/webp") 2x,
    url(${splash_mobi1x}) type("image/png") 1x,
    url(${splash_mobi2x}) type("image/png") 2x
  );
  background-repeat: no-repeat;
  transform: rotate(-2deg);
  background-size: 643px 670px;
  /* background-position: bottom -145px right 8px; */
  margin: 0 auto;

  max-width: 335px;

  @media screen and (min-width: 768px) {
    background-image: image-set(
      url(${splash_tablet1x_wbp}) type("image/webp") 1x,
      url(${splash_tablet2x_wbp}) type("image/webp") 2x,
      url(${splash_tablet1x}) type("image/png") 1x,
      url(${splash_tablet2x}) type("image/png") 2x
    );
    background-size: 926px 965px;

    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    background-image: image-set(
      url(${splash_desktop1x_wbp}) type("image/webp") 1x,
      url(${splash_desktop2x_wbp}) type("image/webp") 2x,
      url(${splash_desktop1x}) type("image/png") 1x,
      url(${splash_desktop2x}) type("image/png") 2x
    );
    background-size: 1070px 1115px;
    background-position: bottom -2px right 2px;
    max-width: 1240px;
  }
`;

export const StyledSection = styled.section`
  transform: rotate(2deg);
`;

export const StyledUl = styled.ul`
  margin-top: 32px;
  display: flex;
  :not(:last-child) {
    margin-right: 14px;
  }
`;

export const StyledWrapper = styled.div`
  text-align: left;
  padding-top: 214px;
  max-width: 397px;
`;

export const StyledTitle = styled.h1`
  padding-top: 120px;
  padding-bottom: 253px;
  text-align: left;
  font-weight: 700px;
  font-size: 44px;
  line-height: 109%;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  @media screen and (min-width: ${tablet}) {
    font-size: 90px;
    line-height: 107%;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 120px;
    line-height: 92%;
  }
`;
export const StyledText = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: #f4f4f4;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const StyledText2 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;
