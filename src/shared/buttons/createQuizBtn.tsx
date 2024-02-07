import { StyledCreateBtn } from "./styledButton";
import { IChooseButton } from "./chooseQuizBtn";
// Вказати шлях до сторінки створення квізів

export function CreateButton({ link, children }: IChooseButton) {
  return <StyledCreateBtn to={`${link}`}>{children}</StyledCreateBtn>;
}
