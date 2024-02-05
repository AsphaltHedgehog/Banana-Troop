interface IBreakpoints {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
}

interface IBreakpointsNumbers {
  readonly mobile: number;
  readonly tablet: number;
  readonly desktop: number;
}

export const breakpoints: IBreakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
};

export const breakpointsNumbers: IBreakpointsNumbers = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};
