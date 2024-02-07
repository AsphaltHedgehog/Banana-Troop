import { useEffect, useState } from "react";
import sprite from "../../images/icons/sprite.svg";
import Svg from "../svg/Svg";
import {
  StyledButton,
  StyledContainer,
  StyledContainer2,
  StyledContainer3,
  StyledNumbers,
  StyledCategory,
  StyledName,
  StyledRatingSvg,
  StyledUl,
} from "./QuizListItem.styled";

interface IQuizListItemProps {
  theme: string;
  rating: number;
  ageGroup: string;
  finished: number | null;
}

const QuizListItem = ({
  theme,
  rating,
  ageGroup,
  finished,
}: IQuizListItemProps) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Формування масиву із рейтингу зірочок
    const starsArray: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        // Якщо зірка повинна бути заповненою
        starsArray.push(
          <StyledRatingSvg
            key={i}
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
          />
        );
      } else {
        // Якщо зірка повинна бути порожньою
        starsArray.push(
          <StyledRatingSvg
            key={i}
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
            fillOpacity={0.08}
          />
        );
      }
    }
    setStars(starsArray);
  }, [rating]); // Викликаємо зміну масиву зірок, якщо змінюється рейтинг

  return (
    <StyledContainer>
      <StyledContainer2>
        <StyledContainer3>
          <Svg sprite={sprite} id={`icon-users`} width={20} height={20} />
          <StyledNumbers>{finished}</StyledNumbers>
        </StyledContainer3>
        <Svg sprite={sprite} id={`icon-heart`} width={20} height={20} />
      </StyledContainer2>
      <StyledCategory>{`${ageGroup.charAt(0).toUpperCase()}${ageGroup.slice(
        1
      )}`}</StyledCategory>
      <StyledName>{theme}</StyledName>
      <StyledUl>
        {stars.map((_star, index) => (
          <li key={index}>{_star}</li>
        ))}
      </StyledUl>
      <StyledButton to="/">Start</StyledButton>
    </StyledContainer>
  );
};

export default QuizListItem;
