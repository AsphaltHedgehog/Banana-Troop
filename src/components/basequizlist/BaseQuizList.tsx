import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWidth } from "../../hooks/useWidth";
import { StyledContainer } from "./BaseQuizList.styled";
import "./customdots.css";
import { breakpointsNumbers } from "../../styles";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import { IQuizListItemProps } from "../../shared/quizlistitem/QuizListItem";

interface IBaseQuizList {
  array: IQuizListItemProps[];
}

const BaseQuizList = ({ array }: IBaseQuizList) => {
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
          {array.map((quiz) => (
            <QuizListItem
              theme={quiz.theme}
              rating={quiz.rating}
              ageGroup={quiz.ageGroup}
              finished={quiz.finished}
            />
          ))}
        </Slider>
      ) : (
        <></>
      )}

      {width < breakpointsNumbers.desktop &&
      width >= breakpointsNumbers.tablet ? (
        <StyledContainer>
          <Slider {...settingsTablet}>
            {array.map((item) => (
              <QuizListItem
                theme={item.theme}
                rating={item.rating}
                ageGroup={item.ageGroup}
                finished={item.finished}
              />
            ))}
          </Slider>
        </StyledContainer>
      ) : (
        <></>
      )}

      {width >= breakpointsNumbers.desktop ? (
        <StyledContainer>
          <Slider {...settingsDesktop}>
            {array.map((item) => (
              <QuizListItem
                theme={item.theme}
                rating={item.rating}
                ageGroup={item.ageGroup}
                finished={item.finished}
              />
            ))}
          </Slider>
        </StyledContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default BaseQuizList;
