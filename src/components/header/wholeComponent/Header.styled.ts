import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;

export const SvgBurgerMenu = styled.svg`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
`;
