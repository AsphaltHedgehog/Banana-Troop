import { styled, css } from "styled-components";
import { breakpoints } from "../../../styles";

const { tablet, desktop } = breakpoints;

interface SvgBurgerMenuProps {
  $iconX?: boolean;
}

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 24px;
  position: relative;

  @media screen and (min-width: ${tablet}) {
    justify-content: space-between;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  @media screen and (max-width: 1439px) {
    margin-right: 62px;
  }
`;

export const SvgBurgerMenu = styled.svg<SvgBurgerMenuProps>`
  position: absolute;
  top: 20px;
  right: 0px;

  ${({ $iconX }) =>
    $iconX &&
    css`
      right: 20px;
    `}

  width: 32px;
  height: 32px;
`;
