import { ChooseButton } from "../../shared/buttons/chooseQuizBtn";
import { CreateButton } from "../../shared/buttons/createQuizBtn";
import { StyledP, StyledSection, StyledTitle, StyledUl } from "./Block.styled";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useAppSelector } from "../../redux/hooks";

const Block = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

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
          <ChooseButton
            link={isLoggedIn ? "/discover" : "/randomQuiz?children"}
          >
            Choose a test
          </ChooseButton>
        </li>
        <li>
          <CreateButton link="/">Create a quest</CreateButton>
        </li>
      </StyledUl>
    </StyledSection>
  );
};

export default Block;
