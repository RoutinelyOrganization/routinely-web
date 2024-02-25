import styled, { keyframes } from "styled-components";

const FadeUp = keyframes`
  from {
    transform: scale(0);
  }
  to { transform: scale(1)}
`;

interface IProps {
  $zIndex: number;
}

export const Wrapper = styled.div<IProps>`
  background-color: #0b0c0b3e;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ $zIndex }) => $zIndex};
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  width: 324px;
  border-radius: 8px;
  animation: ${FadeUp} 0.4s ease;

  > p {
    font-size: 20px;
    line-height: 24px;
  }
`;
