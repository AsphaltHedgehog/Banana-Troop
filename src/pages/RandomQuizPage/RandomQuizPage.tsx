import { useLocation } from "react-router-dom";
import {
  StyledH2,
  StyledP,
  StyledUl,
  StyledBox,
} from "./RandomQuizPage.styled";
// import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import CreateQuizCard from "../../shared/createquizcard/CreateQuizCard";

const RandomQuizPage = () => {
  const location = useLocation();
  const param = location.search.substring(1);

  return (
    <StyledBox>
      <StyledH2>{param === "adults" ? "For Adults" : "For Children"}</StyledH2>
      <StyledP>
        {param === "adults"
          ? "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          : "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
      </StyledP>
      <StyledUl>
        <CreateQuizCard />
        {/* <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem /> */}
      </StyledUl>
    </StyledBox>
  );
};

export default RandomQuizPage;
