import styled from "styled-components";
import { Button } from "../../components/buttons/Button/styles";
import media from "../../mediaQueries";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  padding: 64px 24px 0;

  ${media.desktop} {
    padding-top: 40px;
  }

  ${media.tablet} {
    flex-direction: column;
  }
  ${media.mobile} {
    padding-top: 64px;
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
    ${Button} {
      width: 50%;
    }
  }
`;

export const ImageContainer = styled.div`
  max-height: 434px;
  align-self: flex-end;
  max-width: 653px;
  width: 50%;

  > img {
    width: 100%;
  }

  ${media.desktop} {
    width: 100%;
    padding-top: 0;
    > img {
      display: block;
      margin: 0 auto;
      max-width: 456px;
    }
  }
`;

export const Span = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
`;
