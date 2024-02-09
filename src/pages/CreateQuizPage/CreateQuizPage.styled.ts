import styled from "styled-components";

export const StyledCommonWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 96px;
    padding-bottom: 28px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding: 100px;
  }
`;

export const CreateQuizTitle = styled.h1`
  font-family: "Montserrat", Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1875;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1.09091;
    letter-spacing: -0.01em;
  }
`;

export const CreateQuizTabletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
