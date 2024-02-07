import styled from "styled-components";
import { StyledCreateBtn } from "../buttons/styledButton";
import { breakpoints } from "../../styles";
import Svg from "../svg/Svg";

const { tablet, desktop } = breakpoints;

export const StyledContainer = styled.li`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);

  padding-top: 24px;
  padding-inline: 24px;
  padding-bottom: 100px;

  &:hover,
  &:focus {
    background: #205bf1;
  }

  transition-property: background;

  @media screen and (min-width: ${tablet}) {
    width: 340px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 292px;
  }
`;

export const StyledContainer2 = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 59px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 56px;
  }
`;

export const StyledContainer3 = styled.div`
  display: flex;
`;

export const StyledNumbers = styled.p`
  margin-left: 6px;
  font-size: 14px;
  line-height: 1.28571;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledCategory = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.5);
  text-align: center;

  margin-bottom: 8px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;

  margin-bottom: 16px;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
    line-height: 1.33333;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 4px;
  line-height: 0;

  margin-bottom: 32px;
`;

export const StyledRatingSvg = styled(Svg)`
  fill: rgba(250, 248, 248, 0.938);
  stroke-width: 0;
`;

export const StyledButton = styled(StyledCreateBtn)`
  width: 84px;
  height: 40px;

  padding: 12px 24px;

  margin-inline: auto;

  @media screen and (min-width: ${tablet}) {
    width: 89px;
  }
`;
