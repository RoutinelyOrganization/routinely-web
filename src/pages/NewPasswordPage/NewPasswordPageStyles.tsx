import { styled } from "styled-components";

export const NewPasswordPageWrapperStyle = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 104px;
  height: 100vh;
`;

export const NewPasswordPageFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TitleNewPasswordPageStyle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  color: #171a21;
  margin-top: 32px;
`;

export const CaptionNewPasswordPageStyle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
  text-align: center;
  color: #171a21;
`;
export const InputWrapperNewPasswordPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 16px;
`;

export const InputContainerNewPasswordPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 calc(40px - 16px) 0;
`;
