import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useWidth } from "../../hooks/useWidth";
import { StyledContainer } from "./BaseQuizList.styled";
import "./customdots.css";
import { breakpointsNumbers } from "../../styles";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";




interface IBaseQuizList {
  array: {
    _id: string;
    theme: string;
    category: string;
    background: string;
    ageGroup: string;
    ratingQuantity: number;
    rating: number;
    finished: number;
    owner: string;
  }[];
}

interface ResponsiveObject {
    breakpoint: number;
    settings: "unslick" | Settings;
}

type ResponsiveArray = ResponsiveObject[]

const BaseQuizList = ({ array }: IBaseQuizList) => {
  const width = useWidth();

  const settings = {
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          accessibility: true,
          dots: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          draggable: false,
        }
      },
      {
        breakpoint: 1439,
        settings: {
          accessibility: true,
          dots: true,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          accessibility: true,
          dots: true,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidersToScroll: 1,
        }
      }
    ] as ResponsiveArray
  };

  return (
    <>
      {width < breakpointsNumbers.tablet ? (
        <Slider {...settings}>
          {array?.map((quiz) => (
            <QuizListItem
              key={quiz._id}
              id={quiz._id}
              theme={quiz.theme}
              rating={quiz.rating}
              ageGroup={quiz.ageGroup}
              finished={quiz.finished}
              owner={quiz.owner}
            />
          ))}
        </Slider>
      ) : (
        <></>
      )}

      {width < breakpointsNumbers.desktop &&
      width >= breakpointsNumbers.tablet ? (
        <StyledContainer>
          <Slider {...settings}>
            {array?.map((quiz) => (
              <QuizListItem
                key={quiz._id}
                id={quiz._id}
                theme={quiz.theme}
                rating={quiz.rating}
                ageGroup={quiz.ageGroup}
                finished={quiz.finished}
                owner={quiz.owner}
              />
            ))}
          </Slider>
        </StyledContainer>
      ) : (
        <></>
      )}

      {width >= breakpointsNumbers.desktop ? (
        <StyledContainer>
          <Slider {...settings}>
            {array?.map((quiz) => (
              <QuizListItem
                key={quiz._id}
                id={quiz._id}
                theme={quiz.theme}
                rating={quiz.rating}
                ageGroup={quiz.ageGroup}
                finished={quiz.finished}
                owner={quiz.owner}
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
