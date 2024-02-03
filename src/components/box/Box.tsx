import { StyledBox } from "./Box.styled";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const Box = ({ children }: Props) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
