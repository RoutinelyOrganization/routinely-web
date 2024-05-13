import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 80px;
  max-height: 100px;
  padding: 4px 0;
  border-radius: 8px 0 8px 0;
  box-shadow: 2px 3px 11px -1px;
  background-color: #ffffff;
`;

export const Option = styled.p`
  padding: 4px 16px 0;
  cursor: pointer;

  &:hover {
    background-color: #ebeaed;
  }
`;
