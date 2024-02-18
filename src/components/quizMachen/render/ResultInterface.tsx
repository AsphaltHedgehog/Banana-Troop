import React, { Dispatch, SetStateAction, useState } from "react";
import WriteReviewButton from "../../reviewsModal/WriteReviewButton";
import { Questions } from "../../../redux/questions/slice";
import {
  StyledBtnStars,
  StyledRaitingWrapStar,
} from "../../../pages/Discover/DiscoverPage.styled";
import { StyledRatingSvg } from "../../../shared/quizlistitem/QuizListItem.styled";
import sprite from "../../../images/icons/sprite.svg";

import {
  ResultCloseBtn,
  ResultTitle,
  StyledBox,
  StyledNumber,
  StyledRating,
  StyledResultContainer,
  StyledText,
} from "./ResultInterface.styled";

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
    <StyledResultContainer>
      <ResultCloseBtn type="button">
        <svg>
          <use xlinkHref={`${sprite}#icon-close-modal`}></use>
        </svg>
      </ResultCloseBtn>
      <ResultTitle>The results</ResultTitle>
      <div>
        <StyledText>Correct answers</StyledText>
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
      </StyledBox>
      <WriteReviewButton setReviews={() => setReviews(true)} />
    </StyledResultContainer>
  );
};

export default RenderResultInterface;
