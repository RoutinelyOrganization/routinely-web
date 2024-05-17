import styled from "styled-components";
import media from "../../utils/functions/mediaQueries";

interface IChangeDisplayCalendar {
  openCalendar: boolean;
}

export const Container = styled.section`
  position: relative;
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 40px;
  }
  @media screen and (max-width: 780px) {
    > h1 {
      font-size: 32px;
      margin-bottom: 16px;
    }
  }

  ${media.tablet} {
    > h1 {
      font-size: 24px;
      margin-bottom: 0;
    }
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ContainerIcons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 20%;
  width: 100%;
  justify-content: space-around;
  gap: 8px;

  > img {
    display: inline-block;
    background-color: #ebeaed;
    border-radius: 2px;
    width: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  ${media.desktop} {
    position: absolute;
    flex-direction: column;
    right: 0;
    top: 0;

    > img {
      margin-bottom: 35px;
    }
  }

  ${media.tablet} {
    > img {
      width: 40px;
    }
  }
`;

export const ContainerCalendar = styled.div<IChangeDisplayCalendar>`
  position: absolute;
  top: 100%;
  left: -30%;
  z-index: 10;
  display: ${(props) => (props.openCalendar ? "block" : "none")};

  ${media.desktop} {
    left: -100px;
    top: 40%;
  }

  ${media.tablet} {
    left: -130px;
  }
`;

export const SecondContainerCalendar = styled.div`
  display: none;
  width: 100%;

  ${media.mobile} {
    display: block;
  }
`;
