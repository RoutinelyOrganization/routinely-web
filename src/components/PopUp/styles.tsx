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
  min-height: 100vh;
  justify-content: center;

  ${Header} {
    display: none;
  }

  ${media.mobile} {
    display: block;
    background: none;
    /* position: static; */

    ${Header} {
      display: flex;
    }
  }
`;
