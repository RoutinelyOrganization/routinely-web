import { styled } from "styled-components";

export const HeaderHomePageComponent = styled.header`
  display: flex;
  padding: .92rem 6.7rem;
  align-items: center;
  gap: 10.375rem;
  background-color: #5c59bb;
`;

export const MainHomePageComponent = styled.main`
  display: flex;
  margin-top: 152px;
  flex-direction: column;
  align-items: center;
`;
export const TitleHomePageComponent = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  width: 992px;
  margin-bottom: 40px;
`;
export const CaptionHomePageComponent = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-align: center;
  width: 860px;
  margin-bottom: 48px;
`;
export const ButtonHomePageComponent = styled.button`
  width: 256px;
  height: 40px;
  border-radius: 8px;
  background-color: #5fbe2f;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 38px;
  &:hover {
    transition: all .4s ease;
    background-color: #a2f07b;
    color: #222;
    font-weight: bold;
  }
`;
