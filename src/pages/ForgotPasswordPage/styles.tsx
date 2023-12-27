import styled from "styled-components";
import media from "../../mediaQueries";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  padding: 0 24px;

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

export const ImageContainer = styled.div`
  max-height: 434px;
  align-self: flex-end;
  padding-top: 48px;
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
  font-size: 0.75rem;
  line-height: 16px;
  letter-spacing: 0.5px;
`;
