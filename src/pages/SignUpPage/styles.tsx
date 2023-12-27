import styled from "styled-components";
import media from "../../mediaQueries";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 120px;
  gap: 14px;

  > img {
    margin-top: 50px;
    width: 50%;
    z-index: 1;
  }

  ${media.desktop} {
    padding: 0 32px;

    > img {
      margin-top: 90px;
    }
  }

  ${media.tablet} {
    flex-direction: column;
    align-items: center;

    > img {
      margin-top: 0;
      width: 294px;
      padding: 0 32px 32px 0;
      margin-left: calc(100vw - 334px);
    }
  }

  ${media.mobile} {
    > img {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  max-width: 368px;
  width: 50%;

  ${media.tablet} {
    width: 456px;
    padding-bottom: 32px;
  }

  ${media.mobile} {
    max-width: 312px;
  }
`;
