import React, { Dispatch, SetStateAction } from "react";
import WriteReviewButton from "../../reviewsModal/WriteReviewButton";
import { Questions } from "../../../redux/questions/slice";
import {
  StyledBtnStars,
  StyledRaitingWrapStar,
} from "../../../pages/Discover/DiscoverPage.styled";
import { StyledRatingSvg } from "../../../shared/quizlistitem/QuizListItem.styled";
import sprite from "../../../images/icons/sprite.svg";
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
    <div>
      <p>The results</p>
      <div>
        <p>Correct answers</p>
        {/* //TODO: */}
        <p>{`${validAnswers(AnswersArray)}/${questions.length}`}</p>
      </div>
      <div>
        <p>Rate the quiz</p>
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
      </div>
      <WriteReviewButton setReviews={() => setReviews(true)} />
    </div>
  );
};

export default RenderResultInterface;
