import styled from "styled-components";
import media from "../../../mediaQueries";

export const ButtonApp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #5c59bb;
  color: #5c59bb;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: none;

  ${media.mobile} {
    display: flex;
  }
`;
