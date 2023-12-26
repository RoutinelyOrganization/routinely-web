import styled from "styled-components";
import media from "../../mediaQueries";

interface IHeader {
  $header?: "primary" | "secundary";
}

export const Header = styled.header<IHeader>`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.$header === "primary" ? ".92rem 6.7rem;" : "32px 120px;")};
  align-items: center;
  gap: 80px;
  background-color: #5c59bb;
  position: relative;

  ${media.desktop} {
    padding: ${(props) => (props.$header === "primary" ? ".92rem 6.7rem;" : "24px 32px;")};
  }
`;
