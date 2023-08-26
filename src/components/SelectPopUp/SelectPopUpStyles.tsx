import { styled } from "styled-components";

export const ContainerSelectPopUpStyle = styled.div`
  position: relative;
`;

export const SelectPopUpStyle = styled.select`
  width: 144px;
  height: 56px;
  border-radius: 8px;
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
export const OptionPopUpStyle = styled.option`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #171a21;
`;
export const LabelPopUpStyle = styled.label`
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #171a21;
  position: absolute;
  top: 16px;
  left: 16px;
  pointer-events: none;
`;
