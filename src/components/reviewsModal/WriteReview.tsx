import React, { useCallback, useEffect, useState } from "react";
import sprite from "../../images/icons/sprite.svg";
import {
  StyledRatingSvg,
  StyledSection,
  StyledStarWrapper,
  StyledTitle,
  StyledUl,
  StyledWriteReviewButton,
  StyledWriteReviewForm,
  StyledWriteReviewInput,
  StyledWriteReviewTextarea,
  StyledWriteReviewWrapper,
} from "./WriteReview.styled";

import { useAppDispatch } from "../../redux/hooks";
import { reviewsPostThunk } from "../../redux/reviews/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { schemaWriteReview } from "../../helpers/schemas";

interface WriteReviewFormData {
  name: string;
  // rating: number;
  review: string;
}

interface WriteReviewFormProps {
  setIsReviewSend: (value: boolean) => void;
}

const WriteReview: React.FC<WriteReviewFormProps> = ({ setIsReviewSend }) => {
  const dispatch = useAppDispatch();
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [rating, setRating] = useState<number>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WriteReviewFormData>({
    resolver: yupResolver(schemaWriteReview),
  });

  const submit: SubmitHandler<WriteReviewFormData> = () => {
    dispatch(reviewsPostThunk("someId")).unwrap();
    reset();
    setIsReviewSend(true);
  };
  const handleStarClick = useCallback(
    (index: number) => {
      setRating(() => {
        const newRating = index + 1;

        return newRating;
      });
    },
    [setRating]
  );
  useEffect(() => {
    console.log(rating);

    const starsArray: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      starsArray.push(
        <StyledRatingSvg
          key={i}
          sprite={sprite}
          id={`icon-rating`}
          width={16}
          height={16}
          fillOpacity={i < rating ? 1 : 0.08}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    setStars(starsArray);
  }, [rating, handleStarClick]);

  return (
    <StyledSection>
      <StyledWriteReviewWrapper>
        <StyledTitle>Write a review</StyledTitle>
        <StyledWriteReviewForm onSubmit={handleSubmit(submit)}>
          <StyledWriteReviewInput
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          {errors?.name && <div>{errors.name.message}</div>}
          <StyledStarWrapper>
            <p>Rate the quiz</p>
            <StyledUl>
              {stars.map((_star, index) => (
                <li key={index}>{_star}</li>
              ))}
            </StyledUl>
          </StyledStarWrapper>

          <StyledWriteReviewTextarea
            {...register("review")}
            placeholder="What is your opinion on the quiz"
          />
          {errors?.review && <div>{errors.review.message}</div>}
        </StyledWriteReviewForm>
        <StyledWriteReviewButton onClick={handleSubmit(submit)}>
          Send
        </StyledWriteReviewButton>
      </StyledWriteReviewWrapper>
    </StyledSection>
  );
};

export default WriteReview;
