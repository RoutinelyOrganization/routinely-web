import { styled } from "styled-components";
import media from "../../mediaQueries";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  gap: 14px;
  padding: 100px 32px;

  > img {
    width: 50%;
  }

  ${media.tablet} {
    padding-top: 64px;
    flex-direction: column;
    align-items: center;

    > img {
      max-width: 468px;
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  width: 50%;

  ${media.tablet} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;
  text-align: left;
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
  cursor: pointer;
  transform: translateY(-50%);
  font-size: 0.9rem;
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  margin-top: 16px;

  ${media.desktop} {
    flex-direction: row;
  }

  ${media.tablet} {
    flex-direction: column;
    gap: 16px;
  }
`;
