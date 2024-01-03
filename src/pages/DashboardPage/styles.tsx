import { styled } from "styled-components";
import { Header } from "../../components/Header/styles";
import { ButtonBackPage } from "../../components/buttons/ButtonBackPage/styles";
import media from "../../mediaQueries";

export const Container = styled.div`
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
  display: flex;
  justify-content: space-around;
  padding: 64px 24px;
  gap: 14px;

  ${media.tablet} {
    flex-direction: column;
  }

  ${media.mobile} {
    padding: 24px;
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
  position: absolute;
  top: -20px;
  right: -20px;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 100px;
  background-color: #5fbe2f;
  cursor: pointer;
  transition: all 0.4s ease;
  > img {
    width: 2.5rem;
  }
  &:hover {
    background-color: #80d854;
    transform: scale(0.97);
  }

  ${media.mobile} {
    display: none;
  }
`;

export const ContainerCalendar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: 576px;
  width: 50%;

  > .tablet {
    display: none;
  }

  ${media.desktop} {
    width: 40%;

    > img {
      width: 100%;
    }
    > .desktop {
      display: none;
    }
    > .tablet {
      display: block;
    }
  }

  ${media.tablet} {
    flex-direction: row;
    width: 100%;
    gap: 14px;
    > img {
      width: 50%;
    }
  }

  ${media.mobile} {
    max-width: 400px;
    width: 100%;
    > .tablet {
      display: none;
    }
  }
`;
