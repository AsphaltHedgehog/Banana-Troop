import { StyledChooseBtn } from "./styledButton";

export interface IChooseButton {
  link: string;
  children: string;
}

export function ChooseButton({ link, children }: IChooseButton) {
  return <StyledChooseBtn to={`${link}`}>{children}</StyledChooseBtn>;
}
