import { styled } from "styled-components";
import media from "../../../mediaQueries";

export const Button = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  ${media.mobile} {
    display: none;
  }
`;
