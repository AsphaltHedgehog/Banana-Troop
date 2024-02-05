import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWidth } from "../../hooks/useWidth";
import { StyledContainer } from "./BaseQuizList.styled";
import "./customdots.css";
import { breakpointsNumbers } from "../../styles";

const BaseQuizList = () => {
  const width = useWidth();

  const settingsMobile = {
    dots: false,
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
    slidesToShow: 2,
  };

  const settingsDesktop = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    draggable: false,
  };

  return (
    <>
      {width < breakpointsNumbers.tablet ? (
        <Slider {...settingsMobile}>
          <QuizListItem />
          <QuizListItem />
          <QuizListItem />
          <QuizListItem />
          <QuizListItem />
        </Slider>
      ) : (
        <></>
      )}

      {width < breakpointsNumbers.desktop &&
      width >= breakpointsNumbers.tablet ? (
        <StyledContainer>
          <Slider {...settingsTablet}>
            <QuizListItem />

            <QuizListItem />

            <QuizListItem />

            <QuizListItem />

            <QuizListItem />
          </Slider>
        </StyledContainer>
      ) : (
        <></>
      )}

      {width >= breakpointsNumbers.desktop ? (
        <StyledContainer>
          <Slider {...settingsDesktop}>
            <QuizListItem />
            <QuizListItem />
            <QuizListItem />
            <QuizListItem />
            <QuizListItem />
          </Slider>
        </StyledContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default BaseQuizList;
