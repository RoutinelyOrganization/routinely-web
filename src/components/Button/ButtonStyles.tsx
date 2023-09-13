import styled, { css } from "styled-components";

type ButtonProps = {
  $secondaryColor?: boolean;
};

export const ButtonStyle = styled.button<ButtonProps>`
  width: 368px;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: #5c59bb;
  color: #f6f7f8;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease;
    background-color: #a09df7;
    color: #222;
    font-weight: bold;
  }

  ${({ $secondaryColor }) =>
    $secondaryColor &&
    css`
      background-color: #8f8ce7;
      &:hover {
        transition: all 0.4s ease;
        background-color: #7b79be;
        color: white;
        font-weight: bold;
      }
    `}
`;
