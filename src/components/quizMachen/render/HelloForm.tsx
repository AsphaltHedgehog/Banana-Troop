import React from "react";
import helloFormSubmitHandler from "../functional/SubmitHandler";
import {
  StyledButtonHello,
  StyledFormHello,
  StyledInputHello,
  StyledParagHello,
  StyledTitleHello,
  StyledWrapHello,
} from "./HelloForm.styled";

type RenderHelloFormProps = {
  theme: string;
  name: string;
  setName: (value: string) => void;
  isLoggedIn: boolean;
  index: number;
  setIndex: (index: number) => void;
};

const RenderHelloForm: React.FC<RenderHelloFormProps> = ({
  theme,
  name,
  isLoggedIn,
  setName,
  index,
  setIndex,
}) => {
  return (
    <StyledWrapHello>
      <StyledTitleHello>Log in to take the quiz</StyledTitleHello>
      <StyledParagHello>{theme}</StyledParagHello>
      <StyledFormHello
        onSubmit={(e) => helloFormSubmitHandler(setIndex, index, e)}
      >
        <StyledInputHello
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          disabled={isLoggedIn ? true : false}
        ></StyledInputHello>
        <StyledButtonHello type="submit" disabled={!name}>
          Start
        </StyledButtonHello>
      </StyledFormHello>
    </StyledWrapHello>
  );
};

export default RenderHelloForm;
