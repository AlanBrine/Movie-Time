import { createGlobalStyle, } from "styled-components";

export const  Globalstyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

&::-webkit-scrollbar {
  width: 1.2vw;
  position: absolute;
}


/* &::-webkit-scrollbar-track {
  background: transparent; 
}
 
&::-webkit-scrollbar-thumb {
  background: transparent;
} */
&:hover::-webkit-scrollbar-thumb {
  background: #4A4A4A; 
  border-radius: 2vw;
}

`