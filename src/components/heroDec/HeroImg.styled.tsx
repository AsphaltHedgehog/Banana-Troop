import styled from "styled-components";
// import { breakpoints } from "../../styles";

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

// const { tablet, desktop } = breakpoints;

export const StyledBgrImg = styled.div`
  background-image: image-set(
    url(${splash_mobi1x_wbp}) type("image/webp") 1x,
    url(${splash_mobi2x_wbp}) type("image/webp") 2x,
    url(${splash_mobi1x}) type("image/png") 1x,
    url(${splash_mobi2x}) type("image/png") 2x
  );
  background-repeat: no-repeat;
  z-index: 0;
  background-position: top 0px right 0px;
  width: 100vw;

  height: 670px;
  background-size: 643px 670px;

  @media screen and (min-width: 768px) {
    background-image: image-set(
      url(${splash_tablet1x_wbp}) type("image/webp") 1x,
      url(${splash_tablet2x_wbp}) type("image/webp") 2x,
      url(${splash_tablet1x}) type("image/png") 1x,
      url(${splash_tablet2x}) type("image/png") 2x
    );
    background-size: 926px 965px;
    width: 100vw;
    height: 965px;
  }

  @media screen and (min-width: 1440px) {
    background-image: image-set(
      url(${splash_desktop1x_wbp}) type("image/webp") 1x,
      url(${splash_desktop2x_wbp}) type("image/webp") 2x,
      url(${splash_desktop1x}) type("image/png") 1x,
      url(${splash_desktop2x}) type("image/png") 2x
    );

    background-size: 1070px 1115px;
    width: 100vw;
    height: 1115px;
  }
`;
