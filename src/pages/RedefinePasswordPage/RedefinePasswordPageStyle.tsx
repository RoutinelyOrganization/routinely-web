import styled from "styled-components";

export const RedefinePasswordPageStyle = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const RedefinePasswordPageWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > button {
      margin-top: 2rem;
    }
  }
`;

export const RedefinePasswordPageImage = styled.div`
  width: 40.8125rem;
  height: 27.125rem;
  align-self: flex-end;
  padding-top: 3rem;
`;