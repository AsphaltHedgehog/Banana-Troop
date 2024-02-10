// import React from 'react'

import Svg from "../../../shared/svg";
import sprite from "../../../images/icons/sprite.svg";
import {
  QuestionDelImgButton,
  QuestionImageContainer,
  QuestionInputForUpdate,
  QuestionInputLabel,
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
          <Svg sprite={sprite} id={`icon-edit`} width={12} height={12} />
        </QuestionInputLabel>
        <QuestionInputForUpdate
          id="uploadImage"
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={hangleChengeImageQuestion}
        />
        <QuestionDelImgButton onClick={handleRemoveImage}>
          <Svg sprite={sprite} id={`icon-trash`} width={12} height={12} />
        </QuestionDelImgButton>
      </QuestionImageContainer>
    </>
  );
};

export default QuestionImageButtons;
