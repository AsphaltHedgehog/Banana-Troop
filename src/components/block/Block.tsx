import { ChooseButton } from "../../shared/buttons/chooseQuizBtn";
import { CreateButton } from "../../shared/buttons/createQuizBtn";
import { StyledP, StyledSection, StyledTitle, StyledUl } from "./Block.styled";

const Block = () => {
  return (
    <StyledSection>
      <StyledTitle>Joins, pass quizzes or create them</StyledTitle>
      <StyledP>
        Be a part of our quiz community! Take on challenges, showcase your
        knowledge, or craft your very own quiz to share with the world. Whether
        you're a quiz enthusiast or a curious learner, there's something here
        for everyone.
      </StyledP>
      <StyledUl>
        <li>
          <ChooseButton link="/">Choose a test</ChooseButton>
        </li>
        <li>
          <CreateButton link="/">Create a quest</CreateButton>
        </li>
      </StyledUl>
    </StyledSection>
  );
};

export default Block;
