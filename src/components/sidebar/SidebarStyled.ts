import styled from "styled-components";
interface QuizItemProps {
  clicked: string;
}

interface CreateBtnListContainerProps {
  isOpened: boolean;
}

interface QuestionsContainerProps {
  isOpened: boolean;
}

export const QuestionContainerWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 240px;
    height: 585px;
  }
  @media screen and (min-width: 1440px) {
    width: 343px;
    height: 589px;
  }
`;

export const QuestionsContainer = styled.div<QuestionsContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px 40px 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;

  position: relative;
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
    height: 585px;
  }

  @media screen and (min-width: 1440px) {
    width: 343px;
    height: 589px;
    padding: 32px 15px 80px 15px;
  }

  @media screen and (max-width: 767.98px) {
    padding: ${({ isOpened }) => isOpened ?  '40px 20px 175px 20px' : '40px 20px 100px 20px' }
  }
  
  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    padding: ${({ isOpened }) => isOpened ? '32px 32px 155px 32px ': '32px 32px 90px 32px'}
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ isOpened }) => isOpened ? '32px 15px 155px 15px ': '32px 15px 90px 15px'}
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

    overflow-y: auto;
    overflow-x: hidden;
    justify-content: flex-start;

  scrollbar-width: thin;
  scrollbar-color: #FFFFFF05 transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFFFFF05;
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-button {
  display: none;
}
`;

export const QuizItem = styled.li<QuizItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding: 12px 16px;
  margin: 2px 0;

  background-color: ${({ clicked }) =>
  clicked === "true" ? "#205bf1" : "transparent"};
    
  @media screen and (min-width: 375px) and (max-width: 767.98px){
    width: 295px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    width: 176px;
  }

  @media screen and (min-width: 1440px) {
    width: 313px;
  }
`;

export const Divider = styled.li`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: rgba(244, 244, 244, 0.2);
  padding: 1px;
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;

  padding: 0;
`;

export const CreateBtnListContainer = styled.div<CreateBtnListContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: absolute;

  @media screen and (max-width: 767.98px) {
    bottom: ${({ isOpened }) => isOpened ?  '120px' : '40px' }
  }

  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    bottom: ${({ isOpened }) => isOpened ? '112px' : '32px'}
  }

  @media screen and (min-width: 1440px) {
    bottom: ${({ isOpened }) => isOpened ? '112px' : '32px'}
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
    width: 176px;
  }
  @media screen and (min-width: 1440px) {
    width: 313px;
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
  bottom: -80px;

  @media screen and (min-width: 375px) {
    width: 294px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    bottom: -80px;
    width: 176px;
  }

  @media screen and (min-width: 1440px) {
    bottom: -85px;
    width: 313px;
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

    padding: 2px 0;

    @media screen and (min-width: 375px) and (max-width: 767.98px) {
      width: 267px;
    }
    @media screen and (min-width: 768px) {
      width: 122px;
    }
    @media screen and (min-width: 1440px) {
      width: 277px;
    }
  }
`;
