import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scrollbar-color: #5c59bb #ebeaed ;

    &::-webkit-scrollbar {
        width: 10px;
     }

    &::-webkit-scrollbar-thumb {
        background: #5c59bb;
    }

  	&::-webkit-scrollbar-track {
  		background-color: #ebeaed;
  	}
  }
`;
