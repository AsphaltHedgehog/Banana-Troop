import React, { useEffect } from "react";
import {
  StyledButton,
  StyledButtonWrapper,
  StyledList,
  StyledListItem,
  StyledSection,
  StyledTitle,
  StyledTitleName,
} from "./Reviews.styled";
import logo from "../../images/65b42324f6e8dba3e778f9fb_sobachki-krasivye-kartinki-40.jpg";
import { useSelector } from "react-redux";
import { reviews } from "../../redux/reviews/selectors";
// import { reviewsThunk } from "../../redux/reviews/operations";
// import { useDispatch } from "react-redux";

const Reviews: React.FC = () => {
  const AllReviews = useSelector(reviews);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatchEvent(reviewsThunk());
  // }, []);
  console.log(AllReviews);

  return (
    <StyledSection>
      <StyledTitle>Reviews</StyledTitle>
      <StyledList>
        <StyledListItem>
          <div>
            <img src={logo} alt="logo" />
            <StyledTitleName>Lorem</StyledTitleName>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </StyledListItem>
        <StyledListItem>
          <div>
            <img src={logo} alt="logo" />
            <StyledTitleName>Lorem</StyledTitleName>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </StyledListItem>
      </StyledList>
      <StyledButtonWrapper>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
        <StyledButton></StyledButton>
      </StyledButtonWrapper>
    </StyledSection>
  );
};
export default Reviews;
