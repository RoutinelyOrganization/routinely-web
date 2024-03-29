import { styled } from "styled-components";
import media from "../../utils/functions/mediaQueries";
import { Header } from "../Header/styles";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background-color: #0b0c0b3e;
  width: 100%;
  height: 100vh;

  ${Header} {
    display: none;
  }

  ${media.mobile} {
    display: block;
    background: none;
    position: static;

    ${Header} {
      display: flex;
    }
  }
`;
