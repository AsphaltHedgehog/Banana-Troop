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
  width: 335px;
  @media screen and (min-width: 768px) {
  }
`;

export const QuestionsTitle = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  color: #f4f4f4;
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
  width: 295px;
  border-radius: 15px;
  padding: 8px 16px;
  background-color: ${({ clicked }) => (clicked ? "#205bf1" : "transparent")};
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
`;

export const CreateBtn = styled.button`
  border: 1px solid rgba(244, 244, 244, 0.6);
  color: white;
  border-radius: 30px;
  padding: 15px 18px;
  display: flex;
  align-items: center;
  gap: 190px;
  background-color: transparent;
  cursor: pointer;
`;

export const CreateListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  position: relative;
  border-radius: 15px;
  background-color: #205bf1;

  button {
    display: flex;
    width: 267px;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: transparent;
    cursor: pointer;
  }
`;
