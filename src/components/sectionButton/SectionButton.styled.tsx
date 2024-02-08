import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 50px;
  margin-bottom: 120px;
`;

export const StyledList = styled.ul`
  padding-left: 41px;
  padding-right: 41px;
  display: flex;
  gap: 24px;
  justify-content: space-around;
  max-width: 1158px;
`;
export const StyledListItem = styled.li`
  border-radius: 30px;
  padding: 25px;
  width: 370px;
  height: 70px;
  background: rgba(255, 255, 255, 0.02);
  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #fff;
  }
`;
