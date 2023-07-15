import styled from "styled-components";

export const SignUpFormStyle = styled.form`
  display: flex;
  width: 23rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ErrorMessageStyle = styled.span`
  color: red;
  font-size: 0.9rem;
`;

export const PasswordContainerStyle = styled.div`
  position: relative;
`

export const ShowPasswordButtonStyle = styled.button`
  color: #171a21;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.03125rem;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;

export const TermsOfUseCheckbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

export const TermsOfUseStyle = styled.div`
  display: flex;
  width: 23rem;
  align-items: center;
  gap: 0.5rem;

  & > span {
    color: #171a21;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.03125rem;
    
    & > a {
      color: #171a21;
    }
  }
`;