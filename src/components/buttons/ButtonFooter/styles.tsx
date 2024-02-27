import styled from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const ButtonFooter = styled.button`
  width: 100%;
  background-color: #5c59bb;
  border: none;
  padding: 8px;
  display: none;

  ${media.mobile} {
    display: block;
  }
`;
