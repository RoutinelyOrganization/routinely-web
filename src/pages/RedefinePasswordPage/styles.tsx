import styled from "styled-components";
import { Button } from "../../components/buttons/Button/styles";
import media from "../../mediaQueries";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 104px 32px;
  gap: 24px;

  ${media.desktop} {
    padding-top: 40px;
  }

  ${media.tablet} {
    flex-direction: column;
    padding-bottom: 0;
  }

  ${media.mobile} {
    padding: 40px 24px 0;
  }
`;

export const Wrapper = styled.div`
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

  ${media.tablet} {
    width: 456px;
    ${Button} {
      width: 50%;
    }
  }

  ${media.mobile} {
    width: 100%;
    ${Button} {
      width: 100%;
      margin-top: 0;
    }
  }
`;
