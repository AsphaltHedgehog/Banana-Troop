import styled from "styled-components";
import { breakpoints } from "../../../styles";
const { tablet, desktop } = breakpoints;
export const StyledWrapQuizMachen = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding-bottom: 100px;
  position: relative;
  z-index: 2;
`;
export const WrapBtn = styled.div`
  display: flex;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 30px;
  @media screen and (min-width: ${tablet}) {
    padding-top: 52px;
    padding-bottom: 84px;
  }
  @media screen and (min-width: ${desktop}) {
    /* width: 100%; */
    padding-top: 52px;
    padding-bottom: 84px;
  }
`;
export const WrapImgDiv = styled.div`
  position: absolute;
  /* left: 2%; */
  left: -15%;
  bottom: 30px;
  z-index: -1;
  @media screen and (min-width: ${tablet}) {
    left: -10%;
    bottom: 5px;
  }
  @media screen and (min-width: ${desktop}) {
    left: 10%;
    bottom: 10px;
  }
`;
export const WrapImg = styled.img`
  width: 335px;
  height: 300px;
  @media screen and (min-width: ${tablet}) {
    width: 470px;
    height: 445px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 470px;
    height: 445px;
  }
`;
