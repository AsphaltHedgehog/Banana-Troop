import { FormEvent } from "react";

const helloFormSubmitHandler = (setIndex: (index: number) => void, index: number, e?: FormEvent<HTMLFormElement> ) => {
    if (e) {
      e.preventDefault();
    }
    setIndex(index + 1);
};
  
export default helloFormSubmitHandler;