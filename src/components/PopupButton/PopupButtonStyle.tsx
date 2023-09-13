import { styled } from "styled-components";

export const PopupButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 10px 16px;
  width: 156px;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: #5c59bb;
  color:#f6f7f8;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    transition: all .4s ease;
    background-color: #a09df7;
    color: #222;
    font-weight: bold;
  }
`;
