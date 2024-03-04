import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet, desktop } = breakpoints;

export const StyledSection = styled.section`
  margin: 0 auto;
  margin-bottom: 80px;
  max-width: 643px;

  @media screen and (min-width: ${tablet}) {
    max-width: 704px;
  } 

  @media screen and (min-width: ${desktop}) {
    max-width: 1070px;
  }
`;

export const StyledUl = styled.ul`
  margin-top: 32px;
  display: flex;
  :not(:last-child) {
    margin-right: 14px;
  }
`;

export const StyledWrapper = styled.div`
  text-align: left;
  margin-top: 214px;
  max-width: 397px;
`;

export const StyledTitle = styled.h1`
  margin-top: 120px;
  text-align: left;
  font-weight: 700px;
  font-size: 44px;
  line-height: 109%;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  
  @media screen and (min-width: ${tablet}) {
    font-size: 90px;
    line-height: 107%;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 120px;
    line-height: 92%;
  }
`;
export const StyledText = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: #f4f4f4;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const StyledText2 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;
