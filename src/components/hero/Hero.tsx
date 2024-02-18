import React from "react";

import { ChooseButton } from "../../shared/buttons/chooseQuizBtnWhite";
import { CreateButton } from "../../shared/buttons/createQuizBtn";

import {
  StyledSection,
  StyledText,
  StyledText2,
  StyledTitle,
  StyledUl,
  StyledWrapper,
} from "./Hero.styled";
import { useAppSelector } from "../../redux/hooks";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Hero: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledText>Hello visitor!</StyledText>
        <StyledText2>
          On the site you will find quizzes and quizzes with various types of
          questions: cinema, music, logic and others. Quizzes differ in the
          degreeof difficulty of questions, the number and type of questions.
        </StyledText2>
        <StyledUl>
          <li>
            <ChooseButton
              link={isLoggedIn ? "/discover" : "/randomQuiz?children"}
            >
              Choose a test
            </ChooseButton>
          </li>
          <li>
            <CreateButton>Create a quest</CreateButton>
          </li>
        </StyledUl>
      </StyledWrapper>
      <StyledTitle>
        Are you ready to <br />
        take the Quiz?
      </StyledTitle>
    </StyledSection>
  );
};

export default Hero;
