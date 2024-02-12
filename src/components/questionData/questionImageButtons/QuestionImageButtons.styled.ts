import styled from "styled-components";
import Svg from "../../../shared/svg/Svg";

export const QuestionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const QuestionInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid rgba(244, 244, 244, 0.6);
  background-color: #171717;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    background-color: #205bf1;
    border: none;
  }
  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;
export const QuestionInputForUpdate = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;
export const QuestionDelImgButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid rgba(244, 244, 244, 0.6);
  background-color: #171717;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    background-color: #205bf1;
    border: none;
  }

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;

export const SvgStyles = styled(Svg)`
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;
