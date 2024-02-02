interface IBreakpoints {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
}

export const breakpoints: IBreakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
};