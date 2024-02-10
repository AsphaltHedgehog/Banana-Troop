// import React from 'react'

type QuestionTimeProps = {
  handleTimeClick: (minutes: number, seconds: number) => void;
};

const QuestionTime = ({ handleTimeClick }: QuestionTimeProps) => {
  return (
    <>
      <ul>
        {Array.from({ length: 9 }, (_, index) => {
          const minutes = Math.floor(index / 4);
          const seconds = (index % 4) * 15;
          return (
            <li key={index} onClick={() => handleTimeClick(minutes, seconds)}>
              {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionTime;
