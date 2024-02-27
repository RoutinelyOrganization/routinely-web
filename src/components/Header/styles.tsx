import styled from "styled-components";
import media from "../../utils/functions/mediaQueries";
import { ButtonBackPage } from "../buttons/ButtonBackPage/styles";

interface IHeader {
  $header?: "primary" | "secundary";
}

export const Header = styled.header<IHeader>`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.$header === "primary" ? "14px 140px" : "32px 120px;")};
  align-items: center;
  gap: 80px;
  background-color: #5c59bb;
  position: relative;
  z-index: 1;

  ${media.desktop} {
    padding: ${(props) => (props.$header === "primary" ? "14px 140px" : "24px 32px;")};
  }

  ${media.mobile} {
    padding: ${(props) => (props.$header === "primary" ? "14px 32px" : "14px 24px;")};
    gap: 0;

    ${ButtonBackPage} {
      > .mobile {
        display: ${(props) => (props.$header === "primary" ? "none" : "block")};
      }
    }
  }
`;
