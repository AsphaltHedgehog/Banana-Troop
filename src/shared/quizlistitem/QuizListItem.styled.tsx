import styled from "styled-components";
import { StyledStartBtn } from "../buttons/styledButton";
import { breakpoints } from "../../styles";
import Svg from "../svg/Svg";
import { NavLink } from "react-router-dom";

const { tablet, desktop } = breakpoints;

export const StyledContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);

  padding-top: 24px;
  padding-inline: 24px;
  padding-bottom: 100px;

  &:hover,
  &:focus {
    background: ${(props) =>
      props.className === "nohover" ? "rgba(255, 255, 255, 0.02)" : "#205bf1"};
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

export const StyledFavoriteButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;
`;

export const StyledDotsButton = styled.button`
  border: none;
  margin: 0;
  margin-left: 8px;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;
`;

export const StyledDotsMenu = styled.div`
  position: absolute;
  top: 52px;
  left: 199px;
  content: "";
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;

  padding: 20px;
  border-radius: 20px;
  background-color: #205bf1;

  @media screen and (min-width: ${tablet}) {
    left: 204px;
  }

  @media screen and (min-width: ${desktop}) {
    left: 156px;
  }
`;

export const StyledEditLink = styled(NavLink)`
  color: #f4f4f4;

  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;

  display: flex;
  gap: 8px;
  align-items: baseline;

  &:hover,
  &:focus {
    color: #f4f4f4;
  }
`;

export const StyledDotsMenuButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;
  color: #f4f4f4;

  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;

  display: flex;
  gap: 8px;
  align-items: baseline;
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
  fill: #f4f4f4;
  /* fill-opacity: 0.08; */
  stroke-width: 0;
`;

export const StyledButton = styled(StyledStartBtn)`
  width: 84px;
  height: 40px;

  padding: 12px 24px;

  margin-inline: auto;

  @media screen and (min-width: ${tablet}) {
    width: 89px;
  }
`;
