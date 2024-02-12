// import React from 'react'

import sprite from "../../../images/icons/sprite.svg";
import {
  QuestionDelImgButton,
  QuestionImageContainer,
  QuestionInputForUpdate,
  QuestionInputLabel,
  SvgStyles,
} from "./QuestionImageButtons.styled";

interface QuestionImageProps {
  hangleChengeImageQuestion: () => void;
  handleRemoveImage: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const QuestionImageButtons: React.FC<QuestionImageProps> = ({
  hangleChengeImageQuestion,
  handleRemoveImage,
  inputRef,
}) => {
  return (
    <>
      <QuestionImageContainer>
        <QuestionInputLabel htmlFor="uploadImage">
          <SvgStyles sprite={sprite} id={`icon-edit`} />
        </QuestionInputLabel>
        <QuestionInputForUpdate
          id="uploadImage"
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={hangleChengeImageQuestion}
        />
        <QuestionDelImgButton type="button" onClick={handleRemoveImage}>
          <SvgStyles sprite={sprite} id={`icon-trash`} />
        </QuestionDelImgButton>
      </QuestionImageContainer>
    </>
  );
};

export default QuestionImageButtons;
