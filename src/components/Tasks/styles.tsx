import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px #d8d6dc solid;
  outline: none;
  background-color: transparent;
  color: #3b719f;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  padding-left: 48px;
  text-align: left;
  position: relative;
  cursor: pointer;
  margin: 25px 0px;

  &::before {
    content: "+";
    font-size: 2rem;
    position: absolute;
    display: block;
    left: 10px;
  }
`;
