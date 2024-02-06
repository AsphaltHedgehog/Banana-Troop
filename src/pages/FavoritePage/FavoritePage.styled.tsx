import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet } = breakpoints;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1875;
  letter-spacing: -0.01em;

  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    font-size: 44px;
    line-height: 1.09091;

    margin-bottom: 0px;
  }
`;
