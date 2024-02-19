import styled from "styled-components";
import { breakpoints } from "../../../styles";
const { tablet } = breakpoints;
export const StyledWrapHello = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 20px;
  width: 335px;
  height: 448px;
  background: #1c1c1c;
  margin-top: 48px;

  @media screen and (min-width: ${tablet}) {
    width: 580px;
    margin-top: 220px;
  }
`;

export const StyledTitleHello = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  margin-top: 100px;
  @media screen and (min-width: ${tablet}) {
    margin-top: 124px;
    font-size: 24px;
    line-height: 1.33333;
  }
`;

export const StyledParagHello = styled.p`
  font-family: "Gilroy", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
  margin-top: 12px;
`;

export const StyledFormHello = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 100px;
  @media screen and (min-width: ${tablet}) {
    padding-left: 130px;
    padding-right: 130px;
  }
`;

export const StyledInputHello = styled.input`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 14px 18px 14px 18px;
  width: 295px;
  height: 44px;
  background: #1c1c1c;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.4);
  @media screen and (min-width: ${tablet}) {
    width: 321px;
    height: 44px;
    padding: 14px 18px 14px 18px;
  }
`;

export const StyledButtonHello = styled.button`
  border: none;
  border-radius: 30px;
  width: 295px;
  height: 48px;
  background: #205bf1;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  &:hover {
    background: #144ad5;
  }
  @media screen and (min-width: ${tablet}) {
    width: 321px;
    height: 48px;
    font-size: 16px;
    line-height: 1;
  }
`;