import styled from "styled-components";
import { breakpoints } from "../../styles";
import Box from "../../components/box/Box";
import Svg from "../../shared/svg/Svg";

const { mobile, tablet, desktop } = breakpoints;

export const StyledBox = styled(Box)`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 88px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-top: 100px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1875;
  letter-spacing: -0.01em;

  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    font-size: 44px;
    line-height: 1.09091;

    margin-bottom: 0px;
  }
`;

export const StyledContainer2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: ${tablet}) {
    margin-top: 48px;
    margin-bottom: 48px;
  }
`;

export const StyledSvg = styled(Svg)`
  position: absolute;
  top: 17px;
  left: 18px;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 20px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;

    gap: 48px 24px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  text-decoration: underline;
  color: #f4f4f4;

  margin-top: 40px;

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;

    margin-top: 48px;
  }
`;

export const StyledInputSearch = styled.input`
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 30px;
  padding: 15px 128px 15px 38px;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  background: #171717;

  @media screen and (max-width: ${mobile}) {
    width: 100vw;
    padding: 15px 0px 15px 38px;
  }

  @media screen and (min-width: ${tablet}) {
    border: 1px solid rgsba(244, 244, 244, 0.3);
    border-radius: 30px;
    padding: 15px 33px 15px 38px;
  }
`;
