import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet, desktop } = breakpoints;

export const StyledBox = styled.div`
  padding-inline: 20px;

  @media screen and (min-width: ${tablet}) {
    padding-inline: 32px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-inline: 100px;
  }
`;
