import styled from "styled-components";

export const FormPopuPStyle = styled.form`
  width: 512px;
  height: max-content;
  padding: 24px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.719);
  border-radius: 5px;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 150px;
`;

export const FormInputContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

export const ContainerInputDateTimePopUpstyle = styled.div`
  position: relative;
`;

export const InputDateTimePopUpstyle = styled.input`
  width: 224px;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #d8d6dc;
  padding: 1rem;
  outline: none;
  cursor: pointer;
`;
export const LabelInputDateTimePopUpstyle = styled.label`
  position: absolute;
  font-size: 0.75rem;
  font-weight: 400;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 5px;
  cursor: pointer;
`;
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
