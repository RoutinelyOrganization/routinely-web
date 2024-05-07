import styled from "styled-components";

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
    margin: 5px;
    width: 22px;
  }
`;
