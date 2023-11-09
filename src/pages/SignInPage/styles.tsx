import { styled } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 104px;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  color: #171a21;
  margin: 32px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const ShowPassword = styled.span`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  font-size: .9rem;
  color: #171a21;
  cursor: pointer;
`;
export const CheckboxAndForgetPasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
  gap: 4px;
  > label {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: left;
    cursor: pointer;
  }
`;
export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ForgetPassword = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.5px;
  text-align: left;
  text-decoration: none;
  color: #171a21;
`;

export const ButtonWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 24px;
`