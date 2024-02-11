import styled from "styled-components";
import { breakpoints } from "../../styles";

import splash1x from "../../images/block-component/splash.png";
import splash2x from "../../images/block-component/splash@2x.png";
import splash1xWebP from "../../images/block-component/splash.webp";
import splash2xWebP from "../../images/block-component/splash@2x.webp";
import splash1xAVIF from "../../images/block-component/splash.avif";
import splash2xAVIF from "../../images/block-component/splash@2x.avif";

const { tablet, desktop } = breakpoints;

export const StyledSection = styled.section`
  text-align: left;
  border-radius: 30px;
  position: relative;
  overflow: hidden;

  background-color: #205bf1;
  background-image: image-set(
    url(${splash1xAVIF}) type("image/avif") 1x,
    url(${splash2xAVIF}) type("image/avif") 2x,
    url(${splash1xWebP}) type("image/webp") 1x,
    url(${splash2xWebP}) type("image/webp") 2x,
    url(${splash1x}) type("image/png") 1x,
    url(${splash2x}) type("image/png") 2x
  );
  background-repeat: no-repeat;
  background-size: 318px 301px;
  background-position: bottom -145px right 8px;

  padding-top: 64px;
  padding-inline: 32px;
  padding-bottom: 168px;

  margin: 0 auto;

  max-width: 335px;

  @media screen and (min-width: ${tablet}) {
    background-position: center right -96px;

    padding-top: 88px;
    padding-inline: 32px 233px;
    padding-bottom: 88px;

    max-width: 704px;
  }

  @media screen and (min-width: ${desktop}) {
    background-size: 470px 445px;
    background-position: bottom -52px right -63px;

    padding-top: 88px;
    padding-inline: 64px 400px;
    padding-bottom: 88px;

    max-width: 1240px;
  }
`;

export const StyledTitle = styled.h2`
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

export const StyledP = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  color: #f4f4f4;

  margin-top: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  :not(:last-child) {
    margin-right: 14px;
  }
`;

export const StyledLi = styled.li``;
