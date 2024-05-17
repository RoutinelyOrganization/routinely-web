import styled from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const Container = styled.div`
  max-width: 140px;
  width: 100%;
  background-color: #ebeaed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;

  > span {
    width: 2px;
    height: 10px;
    background-color: #d8d6dc;
  }

  > img {
    width: 40px;
    padding: 8px;
    &:hover {
      cursor: pointer;
    }
  }

  ${media.tablet} {
    max-width: 200px;
    max-height: 30px;
    > img {
      width: 36px;
      padding: 5px;
    }
  }
`;
