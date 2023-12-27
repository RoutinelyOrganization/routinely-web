import styled from "styled-components";
import media from "../../mediaQueries";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.desktop} {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
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
