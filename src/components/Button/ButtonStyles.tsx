import styled, { css } from "styled-components";

type ButtonProps = {
  $secondaryColor?: boolean;
};

export const ButtonComponent = styled.button<ButtonProps>`
  width: 23rem;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #5c59bb;
  color: #f6f7f8;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0.00625rem;
  cursor: pointer;

  ${({ $secondaryColor }) =>
    $secondaryColor &&
    css`
      background-color: #8F8CE7;
    `}
`;
