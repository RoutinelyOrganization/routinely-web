import styled from "styled-components";

export const SignUpFormStyle = styled.form`
  display: flex;
  width: 368px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

export const ErrorMessageStyle = styled.span`
  color: red;
  font-size: 0.9rem;
  max-width: 368px;
  text-align: justify;
`;

export const PasswordContainerStyle = styled.div`
  position: relative;
`

export const ShowPasswordButtonStyle = styled.button`
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

export const TermsOfUseCheckbox = styled.input`
  width: 24px;
  height: 24px;
`;

export const TermsOfUseStyle = styled.div`
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