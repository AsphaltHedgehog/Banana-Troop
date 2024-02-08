import { RegisterStyled } from "./styledButton";

export interface RegisterButtonProps {
  onClick: () => void;
  children: string;
}

export function RegisterButton({ onClick, children }: RegisterButtonProps) {
  return <RegisterStyled onClick={onClick}>{children}</RegisterStyled>;
}
