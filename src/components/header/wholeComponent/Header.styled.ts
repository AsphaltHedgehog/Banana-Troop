import { styled, css } from "styled-components";

interface SvgBurgerMenuProps {
  $iconX?: boolean;
}

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  position: relative;
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  margin-right: 62px;
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
