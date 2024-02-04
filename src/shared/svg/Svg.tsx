import { StyledSvg } from "./Svg.styled";

interface ISvg extends React.SVGProps<SVGSVGElement> {
  sprite: string;
  id: string;
}

const Svg = ({ sprite, id, ...props }: ISvg) => {
  return (
    <StyledSvg {...props}>
      <use href={`${sprite}#${id}`} />
    </StyledSvg>
  );
};

export default Svg;
