interface ISvg extends React.SVGProps<SVGSVGElement> {
  sprite: string;
  id: string;
}

const Svg = ({ sprite, id, ...props }: ISvg) => {
  return (
    <svg {...props}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Svg;
