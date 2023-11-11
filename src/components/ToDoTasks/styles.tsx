import { styled } from "styled-components";

export const Container = styled.div`
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


export const Button = styled.button`
width: 512px;
height: 40px;
border-radius: 8px;
border: 1px #D8D6DC solid;
outline: none;
background-color: transparent;
color: #3B719F;
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
  content:"+";
  font-size: 2rem;
  position: absolute;
  display: block;
  left: 10px;
}
`