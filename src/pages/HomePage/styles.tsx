import { styled } from "styled-components";
import { Wrapper } from "../../components/MenuHeader/styles";
import { Container } from "../../components/containers/ContainerIcons/styles";
import media from "../../mediaQueries";

export const Header = styled.header`
  display: flex;
  padding: 0.92rem 6.7rem;
  align-items: center;
  justify-content: space-between;
  background-color: #5c59bb;

  ${media.desktop} {
    padding: 15px 32px;
  }

  ${media.mobile} {
    padding: 4px 24px;
  }
`;

export const ContainerButtonsHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  width: 100%;
  justify-content: space-between;

  ${Container} {
    display: none;
    ${media.mobile} {
      display: block;

      > :first-child {
        display: none;
      }
    }
  }

  ${media.desktop} {
    max-width: 408px;
    width: 70%;
    gap: 24px;
  }

  ${media.tablet} {
    gap: 0px;
  }

  ${media.mobile} {
    ${Wrapper} {
      top: 10%;
    }
    max-width: 150px;
    & .resources,
    & .plans {
      display: none;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  margin-top: 152px;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  max-width: 992px;
  width: 100%;
  margin-bottom: 40px;
`;

export const Caption = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-align: center;
  max-width: 860px;
  width: 100%;
  margin-bottom: 48px;
`;
export const Button = styled.button`
  max-width: 256px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #5fbe2f;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 38px;
  &:hover {
    transition: all 0.4s ease;
    background-color: #a2f07b;
    color: #222;
    font-weight: bold;
  }
`;

export const ContainerCaptionImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    text-align: center;
  }

  > img {
    &.desktop {
      width: 100%;
      max-width: 1198px;
      display: block;
    }
    &.tablet-horizontal,
    &.tablet-vertical {
      max-width: 435px;
      width: 50%;
      display: none;
    }
  }

  ${media.desktop} {
    flex-direction: row;
    align-items: normal;

    > div {
      padding: 0 32px;
      text-align: left;
      max-width: 516px;
      width: 100%;
      z-index: 1;
      ${Caption} {
        text-align: left;
      }
    }

    > img {
      &.desktop {
        display: none;
      }
      &.tablet-horizontal {
        display: block;
      }
    }
  }

  ${media.tablet} {
    flex-direction: row;
    align-items: normal;
    > img {
      &.tablet-vertical {
        display: block;
      }
      &.tablet-horizontal {
        display: none;
      }
    }
  }

  ${media.mobile} {
    display: block;

    > div {
      text-align: center;
    }

    > img {
      &.tablet-vertical {
        display: none;
      }
      &.tablet-horizontal {
        display: block;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;
