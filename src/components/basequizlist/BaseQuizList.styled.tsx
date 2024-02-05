import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet, desktop } = breakpoints;

export const StyledContainer = styled.div`
  @media screen and (min-width: ${tablet}) and (max-width: ${desktop}) {
    padding-bottom: 56px;
  }
`;
