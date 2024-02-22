import styled from "styled-components";

interface IStylesButtonDanger {
  $width?: string;
}

export const Button = styled.button<IStylesButtonDanger>`
  color: #b3261e;
  background-color: transparent;
  border-radius: 8px;
  max-width: ${({ $width }) => $width || "120px"};
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  padding: 10px 16px;
  border: 1px solid #d8d6dc;
  cursor: pointer;
  transition: all 0.2s;
  &:focus {
    transform: scale(0.98);
  }
`;
