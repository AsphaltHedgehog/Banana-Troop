// import React from 'react'

import Svg from "../../../shared/svg";
import sprite from "../../../images/icons/sprite.svg";

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
      <div>
        <label htmlFor="uploadImage">
          <Svg sprite={sprite} id={`icon-edit`} width={16} height={16} />
        </label>
        <input
          id="uploadImage"
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={hangleChengeImageQuestion}
        />
        <button onClick={handleRemoveImage}>
          <Svg sprite={sprite} id={`icon-trash`} width={16} height={16} />
        </button>
      </div>
    </>
  );
};

export default QuestionImageButtons;
