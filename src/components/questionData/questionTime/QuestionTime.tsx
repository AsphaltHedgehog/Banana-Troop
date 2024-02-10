import { useState } from "react";

import {
  ArrowSvg,
  QuestionTimeElem,
  QuestionTimeList,
  RenderList,
  SelectTimeWrapper,
  TimeSpan,
  TimeWrapper,
} from "./QuestionTime.styled";

// import Svg from "../../../shared/svg/Svg";
import sprite from "../../../images/icons/sprite.svg";

type QuestionTimeProps = {
  handleTimeClick: (minutes: number, seconds: number) => void;
};

const QuestionTime = ({ handleTimeClick }: QuestionTimeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("0:00");

  const handleClick = (minutes: number, seconds: number) => {
    handleTimeClick(minutes, seconds);
    setIsOpen(false); // Закриваємо список після вибору елемента
    setSelectedTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
  };

  return (
    <>
      <TimeWrapper>
        <SelectTimeWrapper>
          <TimeSpan>Time: </TimeSpan>
          <QuestionTimeList>
            {selectedTime}
            <ArrowSvg
              onClick={() => setIsOpen(!isOpen)}
              sprite={sprite}
              id={`icon-chevron-down`}
              width={14}
              height={14}
              style={{
                transform: isOpen ? "rotate(180deg)" : "none",
              }}
            />
          </QuestionTimeList>
        </SelectTimeWrapper>

        {isOpen && (
          <RenderList>
            {Array.from({ length: 9 }, (_, index) => {
              const minutes = Math.floor(index / 4);
              const seconds = (index % 4) * 15;
              return (
                <>
                  {index > 1 && (
                    <QuestionTimeElem
                      key={index}
                      onClick={() => handleClick(minutes, seconds)}
                    >
                      {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
                    </QuestionTimeElem>
                  )}
                </>
              );
            })}
          </RenderList>
        )}
      </TimeWrapper>
    </>
  );
};

export default QuestionTime;
