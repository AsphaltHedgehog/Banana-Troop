import { styled } from 'styled-components';
import { breakpoints } from "../../styles";

const { tablet } = breakpoints;

export const StyledLastHeader = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 80px;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 48px 24px;
    margin-top: 96px;
  }`

export const StyledTitle = styled.h2`
font-weight: 700;
  font-size: 32px;
  line-height: 1.1875;
  letter-spacing: -0.01em;
  color: #F4F4F4;

  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    font-size: 44px;
    line-height: 1.09091;

    margin-bottom: 0px;
  }`