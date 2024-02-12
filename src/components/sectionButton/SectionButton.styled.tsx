import styled from "styled-components";
import { breakpoints } from "../../styles";
const { tablet, desktop } = breakpoints;

export const StyledSection = styled.section`
  margin-top: 80px;
  margin-bottom: 80px;
  @media screen and (min-width: ${tablet}) {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-top: 50px;
    margin-bottom: 120px;
  }
`;

export const StyledList = styled.ul`
  padding-left: 41px;
  padding-right: 41px;
  display: flex;
  gap: 24px;
  justify-content: center;
  max-width: 1158px;
  flex-wrap: wrap;
  @media screen and (min-width: ${tablet}) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: ${desktop}) {
  }
`;
export const StyledListItem = styled.li`
  border-radius: 30px;
  padding: 25px 60px;
  min-width: 335px;
  min-height: 68px;
  background: rgba(255, 255, 255, 0.02);
  font-weight: 700;
  font-size: 14px;
  line-height: 125%;
  color: #fff;
  @media screen and (min-width: ${tablet}) {
    padding: 25px 10px;
    min-width: 218px;
    min-height: 70px;
  }
  @media screen and (min-width: ${desktop}) {
    padding: 25px 25px;
    min-width: 370px;
    min-height: 70px;
    font-size: 16px;
  }
`;
