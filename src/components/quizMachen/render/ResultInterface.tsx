import React, { Dispatch, SetStateAction, useState } from "react";
import WriteReviewButton from "../../reviewsModal/WriteReviewButton";
import { Questions } from "../../../redux/questions/slice";
import {
  StyledBtnStars,
  StyledRaitingWrapStar,
} from "../../../pages/Discover/DiscoverPage.styled";
import { StyledRatingSvg } from "../../../shared/quizlistitem/QuizListItem.styled";
import sprite from "../../../images/icons/sprite.svg";
import { useAppDispatch } from "../../../redux/hooks";
import { IPassData, setPassedQuizThunk } from "../../../redux/quizMachen/operations";
import { useParams } from "react-router-dom";
interface RenderResultInterfaceProps {
  questions: Questions[];
  AnswersArray: { answer: boolean | null }[];
  validAnswers: (AnswersArray: { answer: boolean | null }[]) => number;
  setReviews: Dispatch<SetStateAction<boolean>>;
  
}

const RenderResultInterface: React.FC<RenderResultInterfaceProps> = ({
  AnswersArray,
  questions,
  validAnswers,
  setReviews,
}) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [ rating, setRating ] = useState<number>(0)

  const handleRatingSelect = (rating: number) => {
    setRating(rating);

    if (!id) {
      return;
    }
    
    const data: IPassData = {
    quizId: id,
    quantityQuestions: questions.length,
    correctAnswers: validAnswers(AnswersArray),
    rating: rating,
    };
    
    
    dispatch(setPassedQuizThunk(data));
  };


  return (
    <div>
      <p>The results</p>
      <div>
        <p>Correct answers</p>
        <p>{`${validAnswers(AnswersArray)}/${questions.length}`}</p>
      </div>
      <div>
        <p>Rate the quiz</p>
        <StyledRaitingWrapStar>
          {[1, 2, 3, 4, 5].map((index) => (
            <StyledBtnStars
              key={index}
              onClick={() => handleRatingSelect(index)}
              disabled={rating != 0}
            >
              <StyledRatingSvg
                sprite={sprite}
                id={`icon-rating`}
                width={24}
                height={24}
                fillOpacity={index <= rating ? 1 : 0.08}
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
