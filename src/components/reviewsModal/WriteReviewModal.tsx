import React from "react";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { reviewsPostThunk } from "../../redux/reviews/operations";
import { yupResolver } from "@hookform/resolvers/yup";

interface WriteReviewFormData {
  name: string;
  rating: string;
  review: string;
}

const WriteReviewModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submit: SubmitHandler<WriteReviewFormData> = (data) => {
    dispatch(reviewsPostThunk(data)).unwrap();
    reset();
    navigate("/");
  };
  return (
    <Modal closeModal={navigate("/")}>
      <div>WriteReviewModal</div>
    </Modal>
  );
};
export default WriteReviewModal;
