import styled from "styled-components";
import { ErrorMessage } from "../ErrorMessage/styles";

export const Form = styled.form`
  display: flex;
  width: 368px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  ${ErrorMessage} {
    margin-top: -15px;
  }

`;

export const ShowPasswordButton = styled.button`
  color: #171a21;
  font-size: 0.75rem;
  line-height: 16px;
  letter-spacing: 0.5px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
`;

export const TermsOfUseContainer = styled.div`
  display: flex;
  width: 368px;
  align-items: center;
  gap: 8px;

  & > span {
    color: #171a21;
    font-size: 0.75rem;
    line-height: 16px;
    letter-spacing: 0.5px;
    
    & > a {
      color: #171a21;
    }
  }
`;