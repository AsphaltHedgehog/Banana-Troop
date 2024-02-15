import { LogoutStyled, RegisterStyled } from "./styledButton";

export interface RegisterButtonProps {
  onClick: () => void;
  children: string;
}

export function RegisterButton({ onClick, children }: RegisterButtonProps) {
  return <RegisterStyled onClick={onClick}>{children}</RegisterStyled>;
}

export function LogoutButton({ onClick, children }: RegisterButtonProps) {
  return <LogoutStyled onClick={onClick}>{children}</LogoutStyled>;
}
