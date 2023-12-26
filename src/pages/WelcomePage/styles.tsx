import { styled } from "styled-components";
import media from "../../mediaQueries";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 96px;
  justify-content: space-evenly;
  height: calc(100vh - 96px);

  ${media.desktop} {
    height: auto;
    > div {
      width: 100%;
      padding: 0 24px;
    }
    > img {
      width: 60%;
      top: 0;
    }
  }

  ${media.tablet} {
    flex-direction: column;
    margin: 64px auto;

    > div {
      width: 100%;
      padding: 0 24px;
    }

    > img {
      max-height: 427px;
      margin: 55px auto 0;
    }
  }
`;

export const Title = styled.h1`
  color: #171a21;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const Caption = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #171a21;
  margin-bottom: 80px;

  ${media.desktop} {
    font-weight: 400;
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

export const ButtonAccount = styled.button`
  height: 40px;
  padding: 0.625rem 1rem;
  max-width: 368px;
  width: 100%;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #5c59bb;
  color: #f6f7f8;
  border: none;
  outline: none;
  &:hover {
    transition: all 0.4s ease;
    background-color: #a09df7;
    color: #222;
    font-weight: bold;
  }
`;

export const ButtonCreateAccount = styled(ButtonAccount)`
  background-color: #d8d6dc;
  border: 1px #5c59bb solid;
  color: #5c59bb;
`;
