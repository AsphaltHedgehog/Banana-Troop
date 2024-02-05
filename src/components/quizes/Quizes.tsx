import BaseQuizList from "../basequizlist/BaseQuizList";
import {
  StyledContainer,
  StyledH2,
  StyledNavLink,
  StyledP,
  StyledSection,
} from "./Quizes.styled";

//need Auth selector here
const test = true;

const Quizes = () => {
  return (
    <StyledSection>
      <div>
        <StyledH2>For Adults</StyledH2>
        <StyledContainer>
          <StyledP>
            Dive deep into a world of intriguing quizzes tailored for adults.
            From cinema to logic, challenge your knowledge and discover where
            your expertise lies. Explore a diverse range of topics and test the
            depths of your knowledge.
          </StyledP>
          {/* If Auth, Redirect to DiscoverPage with Adult filter */}
          {/* If not Auth, Redirect to QuizListPage with Adult filter */}
          <StyledNavLink
            to={test ? "/discover?category=adult" : "/123?category=adult"}
          >
            See all
          </StyledNavLink>
        </StyledContainer>
        <BaseQuizList />
      </div>
      <div>
        <StyledH2>For Children</StyledH2>
        <StyledContainer>
          <StyledP>
            Engaging and fun quizzes designed specifically for kids. Dive into a
            world of colorful questions on movies, music, and much more. Perfect
            for young curious minds! A safe space for children to learn, play,
            and grow their knowledge.
          </StyledP>
          {/* If Auth, Redirect to DiscoverPage with Children filter */}
          {/* If not Auth, Redirect to QuizListPage with Children filter */}
          <StyledNavLink
            to={test ? "/discover?category=children" : "/123?category=adult"}
          >
            See all
          </StyledNavLink>
        </StyledContainer>
        <BaseQuizList />
      </div>
    </StyledSection>
  );
};

export default Quizes;
