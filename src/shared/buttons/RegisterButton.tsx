import { RegisterStyled } from "./styledButton";

export interface RegisterButtonProps {
  onSubmit: () => void;
  children: string;
}

export function RegisterButton({ onSubmit, children }: RegisterButtonProps) {
  const handleClick = () => {
    onSubmit();
  };
  return <RegisterStyled onClick={handleClick}>{children}</RegisterStyled>;
}
