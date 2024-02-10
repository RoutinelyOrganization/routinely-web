import styled from "styled-components";
import media from "../../mediaQueries";

interface IChangeDisplayCalendar {
  open: boolean;
}

export const MobileDisplay = styled.div<IChangeDisplayCalendar>`
  opacity: 1;
  display: block;
  ${media.mobile} {
    opacity: ${(props) => (props.open ? "1" : "0")};
    height: ${(props) => (props.open ? "auto" : "0")};
    overflow: hidden;
    transition: opacity 0.3s ease;
  }
`;

export const MobileChangeDisplay = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.mobile} {
    position: relative;
  }
`;

export const Button = styled.button<IChangeDisplayCalendar>`
  display: none;

  ${media.mobile} {
    display: block;
    position: absolute;
    top: ${(props) => (props.open ? "4%" : "30%")};
    right: 5%;
    border: none;
    background-color: transparent;
    transform: ${(props) => (props.open ? "rotate(180deg)" : "")};

    > img {
      width: 50px;
      fill: #5c59bb;
    }
  }
`;
