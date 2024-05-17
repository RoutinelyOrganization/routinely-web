import styled from "styled-components";

interface IContainerProps {
  isVisible: boolean;
}

export const ContainerOptions = styled.div<IContainerProps>`
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #d8d6dc;
  border-radius: 0 0 8px 8px;
  margin-top: -4px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const Option = styled.p`
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  border-bottom: 1px solid #d8d6dc;

  &:hover {
    background-color: #ebeaed;
  }
`;

export const Container = styled.div``;
