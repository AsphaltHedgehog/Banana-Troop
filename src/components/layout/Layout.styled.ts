import { styled, css } from "styled-components";

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
        url("/src/images/hero/splash_mobi1x.webp") type("image/webp") 1x,
        url("/src/images/hero/splash_mobi2x.webp") type("image/webp") 2x,
        url("/src/images/hero/splash_mobi1x.png") type("image/png") 1x,
        url("/src/images/hero/splash_mobi2x.png") type("image/png") 2x
      );
      background-position: top 0px right 0px;
    `}

  @media screen and (min-width: 768px) {
    ${({ $bgImg }) =>
      $bgImg &&
      css`
        background-image: image-set(
          url("/src/images/hero/splash_tablet1x.webp") type("image/webp") 1x,
          url("/src/images/hero/splash_tablet2x.webp") type("image/webp") 2x,
          url("/src/images/hero/splash_tablet1x.png") type("image/png") 1x,
          url("/src/images/hero/splash_tablet2x.png") type("image/png") 2x
        );
        background-size: 926px 965px;
      `}
  }

  @media screen and (min-width: 1440px) {
    ${({ $bgImg }) =>
      $bgImg &&
      css`
        background-image: image-set(
          url("/src/images/hero/splash_desktop1x.webp") type("image/webp") 1x,
          url("/src/images/hero/splash_desktop2x.webp") type("image/webp") 2x,
          url("/src/images/hero/splash_desktop1x.png") type("image/png") 1x,
          url("./src/images/hero/splash_desktop2x.png") type("image/png") 2x
        );
        background-size: 1070px 1115px;
      `}
  }
`;
