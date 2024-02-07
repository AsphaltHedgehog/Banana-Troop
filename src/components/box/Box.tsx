import { StyledBox } from "./Box.styled";

type Props = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

const Box = ({ className, children }: Props) => {
  return <StyledBox className={className}>{children}</StyledBox>;
};

export default Box;
