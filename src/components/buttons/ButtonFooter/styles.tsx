import styled from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const ButtonFooter = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #5c59bb;
  border: none;
  padding: 8px;
  display: none;
  cursor: pointer;
  z-index: 20;

  > img {
    width: 59px;
    height: 38px;
    display: block;
    margin: auto;
  }

  ${media.mobile} {
    display: block;
  }
`;
