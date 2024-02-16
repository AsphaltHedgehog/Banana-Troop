import React from "react";
import {
  StyledSection,
  StyledTitle,
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
  rating: number;
  review: string;
}

interface WriteReviewFormProps {
  setIsReviewSend: (value: boolean) => void;
}

const WriteReview: React.FC<WriteReviewFormProps> = ({ setIsReviewSend }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    reset,
  } = useForm<WriteReviewFormData>({
    resolver: yupResolver(schemaWriteReview),
  });

  const submit: SubmitHandler<WriteReviewFormData> = () => {
    dispatch(reviewsPostThunk()).unwrap();
    reset();
    setIsReviewSend(true);
  };

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
          <StyledWriteReviewInput
            type="number"
            placeholder="Rate the quiz"
            {...register("rating")}
          />
          {errors?.rating && <div>{errors.rating.message}</div>}
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
