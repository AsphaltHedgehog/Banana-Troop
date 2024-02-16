import React, { useEffect } from "react";
import Slider from "react-slick";
import "./customdots.css";
import {
  StyledListItem,
  StyledSection,
  StyledTitle,
  StyledTitleName,
} from "./Reviews.styled";
import { useSelector } from "react-redux";
import { reviews } from "../../redux/reviews/selectors";
import { reviewsThunk } from "../../redux/reviews/operations";
import { useAppDispatch } from "../../redux/hooks";
import { breakpointsNumbers } from "../../styles";
import { useWidth } from "../../hooks/useWidth";
import { StyledContainer } from "../basequizlist/BaseQuizList.styled";

const Reviews: React.FC = () => {
  const width = useWidth();

  const settingsMobile = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
  };

  const settingsTablet = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
  };

  const settingsDesktop = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    draggable: false,
  };

  const allReviews = useSelector(reviews);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(reviewsThunk({ page: 1, limit: 6 }));
  }, [dispatch]);

  return (
    <StyledSection>
      <StyledTitle>Reviews</StyledTitle>

      <>
        {width < breakpointsNumbers.tablet ? (
          <Slider {...settingsMobile}>
            {allReviews.review.map((review) => (
              <StyledListItem key={review._id}>
                <div>
                  <img src={review.avatarUrl} alt={review.userName} />
                  <StyledTitleName>{review.userName}</StyledTitleName>
                </div>
                <p>{review.review}</p>
              </StyledListItem>
            ))}
          </Slider>
        ) : (
          <></>
        )}

        {width < breakpointsNumbers.desktop &&
        width >= breakpointsNumbers.tablet ? (
          <StyledContainer>
            <Slider {...settingsTablet}>
              {allReviews.review.map((review) => (
                <StyledListItem key={review._id}>
                  <div>
                    <img src={review.avatarUrl} alt={review.userName} />
                    <StyledTitleName>{review.userName}</StyledTitleName>
                  </div>
                  <p>{review.review}</p>
                </StyledListItem>
              ))}
            </Slider>
          </StyledContainer>
        ) : (
          <></>
        )}

        {width >= breakpointsNumbers.desktop ? (
          <StyledContainer>
            <Slider {...settingsDesktop}>
              {allReviews.review.map((review) => (
                <StyledListItem key={review._id}>
                  <div>
                    <img src={review.avatarUrl} alt={review.userName} />
                    <StyledTitleName>{review.userName}</StyledTitleName>
                  </div>
                  <p>{review.review}</p>
                </StyledListItem>
              ))}
            </Slider>
          </StyledContainer>
        ) : (
          <></>
        )}
      </>
    </StyledSection>
  );
};
export default Reviews;

{
  /* <Route path="writeReview" element={<WriteReview />} />
          <Route path="thanYou" element={<ThanYou />} /> */
}
