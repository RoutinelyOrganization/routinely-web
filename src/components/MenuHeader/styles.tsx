import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 6%;
  z-index: 999;
`

export const Container = styled.div`
  width: 258px;
  padding: 16px 8px;
  border-radius: 0px 0px 8px 8px;
  background: #f6f7f8;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);
`;

export const MenuBar = styled.div`
  display: flex;
  width: 258px;
  padding: 4px 12px;
  justify-content: flex-end;
  align-items: center;
  background: #5c59bb;
  

  & > svg {
    cursor: pointer;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  list-style: none;
`;

export const Item = styled.li`
  color: #5c59bb;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;
