import { styled } from "styled-components";
import { ButtonBackPage } from "../../components/buttons/ButtonBackPage/styles";
import { Header } from "../../components/Header/styles";
import { Container as ContainerTypeTask } from "../../components/TypeTask/styles";
import media from "../../utils/functions/mediaQueries";

interface IDashboardPageStyle {
  $visible: boolean;
}

export const Container = styled.div<IDashboardPageStyle>`
  ${ButtonBackPage} {
    display: none;
  }
  ${media.desktop} {
    ${Header} {
      &:first-child {
        padding-left: calc(100vw - 60%);
      }
    }
  }
`;

export const Main = styled.main`
  padding: 64px 24px;
  gap: 14px;

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
  }

  ${media.mobile} {
    padding: 10px 10px 74px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const ContainerTasks = styled.section`
  max-width: 576px;
  width: 50%;
  border-radius: 10px;
  border: 1px #5c59bb solid;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  position: relative;

  ${media.desktop} {
    width: 60%;
  }

  ${media.tablet} {
    width: 100%;
    margin-top: 32px;
  }

  ${media.mobile} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ButtonEditTask = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #5fbe2f;
  cursor: pointer;
  transition: all 0.4s ease;
  > img {
    width: 1.5rem;
  }
  &:hover {
    background-color: #80d854;
  }

  /* ${media.desktop} {
    position: fixed;
    top: 90%;
    right: 2%;
    z-index: 20;
  } */

  ${media.mobile} {
    display: none;
  }
`;

export const ContainerCalendar = styled.section`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 40px;
`;

export const ContainerNewTask = styled.div`
  position: relative;
  max-width: 90px;
  width: 100%;
  height: 80px;
  top: 20px;

  > ${ContainerTypeTask} {
    position: absolute;
    right: 73px;
    top: 23px;
    z-index: 20;
    max-width: 180px;
    max-height: 80px;
  }

  ${media.desktop} {
    position: fixed;
    z-index: 20;
    top: auto;
    bottom: 0px;
    right: -30px;
    > ${ContainerTypeTask} {
      top: -64px;
    }
  }

  ${media.mobile} {
    top: auto;
    bottom: 57px;
    right: -71px;
    max-width: 100%;
    width: 100%;
    height: 157px;
    ${ContainerTypeTask} {
      top: 0;
      max-width: 400px;
      max-height: 157px;
      > p {
        padding: 16px;
      }
    }
  }
`;
