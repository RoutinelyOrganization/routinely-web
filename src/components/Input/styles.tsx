import styled from "styled-components";

type InputProps = {
  $hasErro?: boolean;
};

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  > img {
    position: absolute;
    right: 20px;
    top: 15px;
  }
`;

export const BorderWhite = styled.span`
  position: relative;
  display: block;
  height: 1px;
  background-color: #fff;
  top: 12px;
  left: -2px;
  width: 113%;
`;
export const Label = styled.label`
  position: relative;
  z-index: 1;
`;

export const LabelInput = styled.div<InputProps>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${({ $hasErro }) => ($hasErro ? "#B3261B" : "#171a21")};
  position: absolute;
  top: 16px;
  left: 16px;
  pointer-events: none;
`;

export const InputStyle = styled.input<InputProps>`
  border: 1px solid ${({ $hasErro }) => ($hasErro ? "#B3261b" : "#D8DCD6")};
  border-radius: 8px;
  width: 368px;
  height: 56px;
  outline: none;
  padding: 8px 0 8px 16px;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${({ $hasErro }) => ($hasErro ? "#B3261b" : "#333333")};

  &:focus ~ ${LabelInput}, &:valid ~ ${LabelInput} {
    top: -15px;
    font-size: 0.85rem;
    background-color: transparent;
    padding: 0.2rem;
    transition: all 0.4s ease;
  }

  &::placeholder {
    color: ${({ $hasErro }) => ($hasErro ? "#B3261b" : "#333333")};
  }

  &::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;
