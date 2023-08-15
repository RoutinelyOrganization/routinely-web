import styled from "styled-components";

export const ForgotPasswordPageStyle = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ForgotPasswordPageWrapper = styled.div`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > button {
      margin-top: 32px;
    }
  }
`;

export const ForgotPasswordImageContainer = styled.div`
  width: 653px;
  height: 434px;
  align-self: flex-end;
  padding-top: 48px;
`;
