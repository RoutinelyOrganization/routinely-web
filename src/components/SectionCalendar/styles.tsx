import styled from "styled-components";

interface IChangeDisplayCalendar {
  openCalendar: boolean;
}

export const Container = styled.section`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 40px;
  }
`;

export const ContainerIcons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 20%;
  width: 100%;
  justify-content: space-around;

  > img {
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContainerCalendar = styled.div<IChangeDisplayCalendar>`
  position: absolute;
  top: 100%;
  left: 10%;
  z-index: 10;
  display: ${(props) => (props.openCalendar ? "block" : "none")};
`;
