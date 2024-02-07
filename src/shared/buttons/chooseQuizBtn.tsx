import { StyledChooseBtn } from "./styledButton";

export interface IChooseButton {
  link: string;
  children: string;
}

// Вказати шлях до сторінки вибору квізів
export function ChooseButton({ link, children }: IChooseButton) {
  return <StyledChooseBtn to={`${link}`}>{children}</StyledChooseBtn>;
}
