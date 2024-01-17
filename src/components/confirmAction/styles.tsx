import styled, { keyframes } from "styled-components";

const FadeUp = keyframes`
  from {
    transform: scale(0);
  }
  to { transform: scale(1)}
`;

export const Wrapper = styled.div`
  background-color: #0b0c0b3e;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  width: 324px;
  border-radius: 8px;
  animation: ${FadeUp} 0.4s ease;
`;

export const ContainerButton = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 0px 32px;
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 120px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  padding: 10px 16px;
  border: 1px solid #d8d6dc;
  cursor: pointer;
  transition: all 0.2s;
  &:focus {
    transform: scale(0.98);
  }
`;

export const ButtonNot = styled(Button)`
  color: #b3261e;
`;
export const ButtonYes = styled(Button)`
  color: #fff;
  background-color: #5c59bb;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 24px;
`;
