import { styled } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 96px;
  justify-content: space-evenly;
  height: calc(100vh - 96px);
`;

export const Title = styled.h1`
  color: #171a21;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const Caption = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: #171a21;
  margin-bottom: 80px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0px;
`;

export const ButtonAccount = styled.button`
  height: 40px;
  padding: 0.625rem 1rem;
  width: 368px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #5C59BB;
  color: #F6F7F8;
  border: none;
  outline: none;
  &:hover {
    transition: all .4s ease;
    background-color: #a09df7;
    color: #222;
    font-weight: bold;
  }
`;

export const ButtonCreateAccount = styled(ButtonAccount)`
  background-color: #d8d6dc;
  border: 1px #5c59bb solid;
  color: #5c59bb;
`;
