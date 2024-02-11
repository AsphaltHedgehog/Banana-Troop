import styled from "styled-components";
import Svg from "../../../shared/svg/Svg";

export const TimeWrapper = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

export const SelectTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  @media screen and (min-width: 768px) {
    position: absolute;
    /* bottom: 32px; */
  }
`;
export const TimeSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
`;

export const QuestionTimeList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 8px 14px;
  width: 84px;
  height: 34px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  @media screen and (min-width: 768px) {
    padding: 8px 18px;
  }
`;

export const QuestionTimeElem = styled.li`
  &:hover {
    background-color: #205bf1;
  }

  &:active {
    background-color: #0d419d;
  }
`;

export const RenderList = styled.ul`
  margin-top: 2px;
  background-color: #205bf1;
  position: absolute;
  z-index: 2;
  color: #fff;
  width: 83px;
  border-radius: 20px;
  padding: 8px 18px;
  top: 100%;
  left: 69%;
  transform: translate(-50%);
`;

export const ArrowSvg = styled(Svg)`
  position: absolute;
  right: 14px;
  top: 10px;
  /* transform: translateY(-50%); */
`;
