import styled from "styled-components";
interface QuizItemProps {
  clicked: boolean;
}
export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px 40px 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 240px;
    height: 630px;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    width: 343px;
    height: 589px;
    padding: 30px;
  }
`;

export const QuestionsTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 20px;
  color: #f4f4f4;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const QuestionList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  padding: 0;
`;

export const QuizItem = styled.li<QuizItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 255px;
  border-radius: 15px;
  padding: 5px 10px;
  background-color: ${({ clicked }) => (clicked ? "#205bf1" : "transparent")};
  @media screen and (min-width: 375px) {
    width: 295px;
  }
  @media screen and (min-width: 1440px) {
    width: 272px;
  }
`;

export const Divider = styled.li`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: rgba(244, 244, 244, 0.2);
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  border-radius: 15px;
  padding: 8px 8px;
  cursor: pointer;
`;

export const CreateBtnListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    position: relative;
    bottom: -320px;
  }
`;

export const CreateBtn = styled.button`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 15px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  cursor: pointer;
  font-family: "Gilroy", sans-serif;
  font-size: 14px;
  color: #f4f4f4;
  width: 245px;
  @media screen and (min-width: 375px) {
    width: 295px;
  }
  @media screen and (min-width: 768px) {
    width: 140px;
  }
  @media screen and (min-width: 1440px) {
    width: 260px;
    position: absolute;
    bottom: 235px;
  }
`;

export const CreateListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 15px;
  position: absolute;
  border-radius: 15px;
  background-color: #205bf1;
  width: 244px;
  bottom: -462px;

  @media screen and (min-width: 375px) {
    width: 294px;
  }
  @media screen and (min-width: 768px) {
    width: 140px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    bottom: -80px;
  }
  @media screen and (min-width: 1440px) {
    bottom: 151px;
    width: 260px;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f4f4f4;
    background-color: transparent;
    font-size: 16px;
    font-family: "Gilroy", sans-serif;
    cursor: pointer;
    border: none;
    width: 222px;

    @media screen and (min-width: 375px) {
      width: 267px;
    }
    @media screen and (min-width: 768px) {
      width: 122px;
    }

    @media screen and (min-width: 1440px) {
      width: 235px;
    }
  }
`;
