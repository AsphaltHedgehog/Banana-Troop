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
    width: 100%;
    padding-top: 52px;
    padding-bottom: 84px;
  }
`;
