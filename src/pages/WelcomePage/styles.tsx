import { styled } from "styled-components";
import media from "../../mediaQueries";

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 96px 32px 0;
  height: 100vh;
  gap: 24px;

  ${media.desktop} {
    height: auto;
    > div {
      width: 100%;
    }
    > img {
      width: 60%;
      top: 0;
    }
  }

  ${media.tablet} {
    padding-top: 64px;
    margin: auto;
    flex-direction: column;

    > div {
      width: 100%;
    }

    > img {
      max-height: 427px;
      margin: 55px auto 0;
    }
  }
`;

export const Title = styled.h1`
  color: #171a21;
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;
  margin-top: 40px;
  margin-bottom: 24px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 36px;
    margin-top: 24px;
  }
`;

export const Caption = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #171a21;
  margin-bottom: 80px;

  ${media.desktop} {
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 24px;
  }

  ${media.mobile} {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0px;

  ${media.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`;

export const ButtonCreateAccount = styled.button`
  height: 40px;
  padding: 10px 16px;
  max-width: 368px;
  width: 100%;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #d8d6dc;
  color: #5c59bb;
  border: 1px #5c59bb solid;
  outline: none;
  &:hover {
    transition: all 0.4s ease;
    background-color: #a09df7;
    color: #222;
    font-weight: bold;
  }
`;
