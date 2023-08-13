import styled from "styled-components";

export const InputStyle = styled.input`
  border: 1px solid #D8DCD6;
  border-radius: 8px;
  width: 368px;
  height: 56px;
  padding: 8px 0 8px 16px;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.5px;

  &::placeholder {
    color: #171A21;
  }

  &::-ms-reveal, ::-ms-clear {
    display: none;
  }
`;