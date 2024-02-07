import { StyledChooseWhiteBtn } from "./styledButton";

export interface IChooseButton {
  link: string;
  children: string;
}

// Вказати шлях до сторінки вибору квізів
export function ChooseButton({ link, children }: IChooseButton) {
  return <StyledChooseWhiteBtn to={`${link}`}>{children}</StyledChooseWhiteBtn>;
}
