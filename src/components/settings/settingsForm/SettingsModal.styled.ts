import { styled } from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

const { tablet } = breakpoints;

export const SettingsUserWrapper = styled.div`
  border: 1px solid #f4f4f44d;
  background-color: #ffffff05;
  border-radius: 30px;
  padding: 40px 20px;

  @media screen and (min-width: ${tablet}) {
    max-width: 580px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const SettingsPhotoWrapper = styled.div`
  margin-bottom: 46px;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }

  label {
    position: relative;
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 0;
    right: 35px;
    width: 30px;
    height: 30px;
  }
`;

export const SettingsForm = styled.form`
  width: 295px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  @media screen and (min-width: ${tablet}) {
    width: 280px;
  }

  p {
    position: absolute;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    left: 19px;
  }
`;

export const SettingsFormButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px 16px 0px;
  border-radius: 30px;
  background-color: #205bf1;
  border: none;
  color: white;

  @media screen and (min-width: ${tablet}) {
    &:hover {
      background-color: #144ad5;
    }
  }
`;
