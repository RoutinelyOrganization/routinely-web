import { styled } from "styled-components";
import { Wrapper } from "../../components/MenuHeader/styles";
import { Button as ButtonStyle } from "../../components/buttons/Button/styles";
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

    & ${ButtonStyle} {
      margin-right: 8px;
    }
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
      top: 7%;
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
  flex-direction: column;
  align-items: center;
  padding: 152px 32px 80px;

  > hr {
    display: none;
  }

  ${media.desktop} {
    padding-top: 56px;
  }

  ${media.mobile} {
    padding-top: 40px;
    > hr {
      display: block;
      width: 100%;
      margin-bottom: 32px;
    }
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;
  text-align: center;
  max-width: 992px;
  width: 100%;
  margin-bottom: 40px;

  ${media.desktop} {
    text-align: left;
    margin-bottom: 56px;
  }

  ${media.tablet} {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 44px;
  }

  ${media.mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Caption = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  max-width: 860px;
  width: 100%;
  margin-bottom: 48px;

  ${media.mobile} {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const Button = styled.button`
  max-width: 256px;
  width: 50%;
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
    margin-bottom: 32px;

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
