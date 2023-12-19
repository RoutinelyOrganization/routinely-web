import styled from "styled-components";

type SelectProps = {
  $hasErro?: boolean;
};
export const ContainerSelectPopUp = styled.div`
  position: relative;
`;

export const SelectPopUp = styled.select<SelectProps>`
  width: 144px;
  height: 56px;
  border-radius: 8px;
  border-color: ${({ $hasErro }) => ($hasErro ? "#B3261B" : "#171a21")};
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  &:focus ~ label,
  &:valid ~ label {
    top: -15px;
    font-size: 0.75rem;
    background-color: white;
    padding: 0.2rem;
    transition: all 0.4s ease;
  }
`;
export const OptionPopUp = styled.option`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #171a21;
`;
export const LabelSelectPopUp = styled.label<SelectProps>`
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
