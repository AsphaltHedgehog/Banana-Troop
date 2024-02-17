import React, { Dispatch, SetStateAction } from "react";
import WriteReviewButton from "../../reviewsModal/WriteReviewButton";
import { Questions } from "../../../redux/questions/slice";
import {
  StyledBtnStars,
  StyledRaitingWrapStar,
} from "../../../pages/Discover/DiscoverPage.styled";
import { StyledRatingSvg } from "../../../shared/quizlistitem/QuizListItem.styled";
import sprite from "../../../images/icons/sprite.svg";
import {
  ResultTitle,
  StyledBox,
  StyledNumber,
  StyledRating,
  StyledResultContainer,
  StyledText,
} from "./ResultInterface.styled";
interface RenderResultInterfaceProps {
  questions: Questions[];
  AnswersArray: { answer: boolean }[];
  validAnswers: (AnswersArray: { answer: boolean }[]) => number;
  setReviews: Dispatch<SetStateAction<boolean>>;
}

const RenderResultInterface: React.FC<RenderResultInterfaceProps> = ({
  AnswersArray,
  questions,
  validAnswers,
  setReviews,
}) => {
  return (
    <StyledResultContainer>
      <ResultTitle>The results</ResultTitle>
      <div>
        <StyledText>Correct answers</StyledText>
        {/* //TODO: */}
        <StyledNumber>{`${validAnswers(AnswersArray)}/${
          questions.length
        }`}</StyledNumber>
      </div>
      <StyledBox>
        <StyledRating>Rate the quiz</StyledRating>
        <StyledRaitingWrapStar>
          {[1, 2, 3, 4, 5].map((index) => (
            <StyledBtnStars
              key={index}
              // onClick={() => handleRatingSelect(index)}
            >
              <StyledRatingSvg
                sprite={sprite}
                id={`icon-rating`}
                width={24}
                height={24}
                // fillOpacity={index <= selectedRating ? 1 : 0.08}
              />
            </StyledBtnStars>
          ))}
        </StyledRaitingWrapStar>
      </StyledBox>
      <WriteReviewButton setReviews={() => setReviews(true)} />
    </StyledResultContainer>
  );
};

export default RenderResultInterface;
