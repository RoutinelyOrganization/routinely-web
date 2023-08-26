import { styled } from "styled-components";

export const ContainerInputPopUpStyle = styled.div`
  position: relative;
`;

export const InputPopUpStyle = styled.input`
  width: 464px;
  height: 56px;
  border: 1px solid #d8d6dc;
  border-radius: 8px;
  outline: none;
  font-size: 24px;
  padding: 16px;
  &:focus ~ label,
  &:valid ~ label {
    top: -15px;
    font-size: 0.75rem;
    background-color: white;
    padding: 0.2rem;
    transition: all 0.4s ease;
  }
`;
export const InputPopUpLabelStyle = styled.label`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #171a21;
  position: absolute;
  top: 16px;
  left: 10px;
  pointer-events: none;
`;
