import styled from "styled-components";
import media from "../../utils/functions/mediaQueries";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 0;
  border-radius: 8px 0 8px 0;
  box-shadow: 2px 3px 11px -1px;
  background-color: #ffffff;

  ${media.desktop} {
    border-radius: 0 8px 0 8px;
  }
`;

export const Option = styled.p`
  padding: 4px 16px 0;
  cursor: pointer;

  &:hover {
    background-color: #ebeaed;
  }
`;
