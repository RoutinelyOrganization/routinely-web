import { styled } from "styled-components";

export const DashboardPageStyle = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 64px 0;
`;

export const ContainerTasksStyle = styled.section`
  width: 576px;
  border-radius: 10px;
  border: 1px #5c59bb solid;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  position: relative;
  `;

export const ButtonEditTask = styled.button`
    position: absolute;
    top: -20px;
    right: -20px;
    width: 64px;
    height: 64px;
    border:none;
    border-radius: 100px;
    background-color: #5fbe2f;
    font-size: 3.3rem;
    text-align: center;
    cursor: pointer;
    &:hover {
    transition: all .4s ease;
    background-color: #93ee65;
    color: #555555;
    font-weight: bold;
  }
  ` 

export const ContainerCalendarStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
