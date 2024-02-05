import { StyledSvg } from "./Svg.styled";

interface ISvg extends React.SVGProps<SVGSVGElement> {
  sprite: string;
  id: string;
  fill?: string;
}

const Svg = ({ sprite, id, fill, ...props }: ISvg) => {
  return (
    <StyledSvg {...props}>
      <use href={`${sprite}#${id}`} fill={fill} />
    </StyledSvg>
  );
};

export default Svg;
