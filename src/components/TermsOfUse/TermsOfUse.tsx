import styled from "styled-components";

export const TermsOfUseCheckbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

export const TermsOfUseComponent = styled.div`
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
