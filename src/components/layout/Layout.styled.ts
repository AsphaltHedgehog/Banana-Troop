import { styled, css } from "styled-components";

import spash_mob1x_webp from "../../images/hero/splash_mobi1x.webp";
import spash_mob2x_webp from "../../images/hero/splash_mobi2x.webp";
import spash_mob1x_png from "../../images/hero/splash_mobi1x.png";
import spash_mob2x_png from "../../images/hero/splash_mobi2x.png";

import spash_tabl1x_webp from "../../images/hero/splash_tablet1x.webp";
import spash_tabl2x_webp from "../../images/hero/splash_tablet2x.webp";
import spash_tabl1x_png from "../../images/hero/splash_tablet1x.png";
import spash_tabl2x_png from "../../images/hero/splash_tablet1x.png";

import spash_desk1x_webp from "../../images/hero/splash_desktop1x.webp";
import spash_desk2x_webp from "../../images/hero/splash_desktop2x.webp";
import spash_desk1x_png from "../../images/hero/splash_desktop1x.png";
import spash_desk2x_png from "../../images/hero/splash_desktop2x.png";

interface HomeWrapperProps {
  $bgImg: boolean;
}

export const LayoutWrapper = styled.div<HomeWrapperProps>`
  background-repeat: no-repeat;
  background-size: contain;

  ${({ $bgImg }) =>
    $bgImg &&
    css`
      background-image: image-set(
        url(${spash_mob1x_webp}) type("image/webp") 1x,
        url(${spash_mob2x_webp}) type("image/webp") 2x,
        url(${spash_mob1x_png}) type("image/png") 1x,
        url(${spash_mob2x_png}) type("image/png") 2x
      );
      background-position: top 0px right 0px;
    `}

  @media screen and (min-width: 768px) {
    ${({ $bgImg }) =>
      $bgImg &&
      css`
        background-image: image-set(
          url(${spash_tabl1x_webp}) type("image/webp") 1x,
          url(${spash_tabl2x_webp}) type("image/webp") 2x,
          url(${spash_tabl1x_png}) type("image/png") 1x,
          url(${spash_tabl2x_png}) type("image/png") 2x
        );
        background-size: 926px 965px;
      `}
  }

  @media screen and (min-width: 1440px) {
    ${({ $bgImg }) =>
      $bgImg &&
      css`
        background-image: image-set(
          url(${spash_desk1x_webp}) type("image/webp") 1x,
          url(${spash_desk2x_webp}) type("image/webp") 2x,
          url(${spash_desk1x_png}) type("image/png") 1x,
          url(${spash_desk2x_png}) type("image/png") 2x
        );
        background-size: 1070px 1115px;
      `}
  }
`;
