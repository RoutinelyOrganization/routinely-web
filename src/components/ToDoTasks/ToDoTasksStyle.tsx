import { styled } from "styled-components";

export const ToDoTasksStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
  & > hr {
    width: 512px;
    height: 1px;
    background: #3b719f;
  }
`;
