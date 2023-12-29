import styled from "styled-components";
import media from "../../mediaQueries";

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 64px 120px;
  gap: 14px;

  > img {
    width: 50%;
    z-index: 1;
  }

  ${media.desktop} {
    padding: 40px 32px;

    > img {
      margin-top: 90px;
    }
  }

  ${media.tablet} {
    padding-top: 64px;
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
    padding-top: 40px;
    > img {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
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
