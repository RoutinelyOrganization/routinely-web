import styled from "styled-components";

export const Container = styled.div`
  margin-top: 200px;
  background-color: #fff;
  padding: 24px;
  width: 324px;
  border-radius: 8px;
`;

export const ContainerButton = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  padding: 10px 16px;
  border: 1px solid #d8d6dc;
  cursor: pointer;
`;

export const ButtonCancel = styled(Button)`
  color: #767676;
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
