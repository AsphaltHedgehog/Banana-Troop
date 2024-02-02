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
          <a href="">Choose a test</a>
        </li>
        <li>
          <a href="">Create a quest</a>
        </li>
      </StyledUl>
    </StyledSection>
  );
};

export default Block;
