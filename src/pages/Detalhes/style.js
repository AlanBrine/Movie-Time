import styled from "styled-components";
import { Link } from "react-router-dom"

export const Body = styled.div`
height: 100vh;
width: 100%;


`
export const Container = styled.section`
display:flex;
flex-direction: column;
.hightImg{
    display:none;
}
.stats{
    
    margin-bottom:3vh;
}

>p{text-align: center;
font-weight:bold;}

>img{
   margin:0 0 5vh;
    width:100vw;
}

@media screen and (min-width: 700px){
    flex-direction:row ;
>img{
    margin:0;
   /*  height:80vh; */

    width:52vw
}
    .mobileImg{
display:none;
    }

    .hightImg{
    display:block;
}

}
`
export const LinkBnt = styled(Link)`
text-decoration: none;
outline: none;
color:white;
font-weight:bold;


`
export const Button = styled.button`
margin:5vh 10px;
font-size:0.8em;
padding:10px 20px;
border:none;
background-color:#c62623;
border-radius:10px;
@media screen and (min-width: 714px){
    font-size:0.3em;
}


`
export const Info = styled.section`
display:flex;
flex-direction:column;
align-items:center;

.stats{
    margin-bottom:3vh;
}

>p{text-align: center;
font-weight:bold;}

@media screen and (min-width: 700px) {
  font-size:7vw;
    >p{
        text-align:start;
        margin-left:10px;
        font-size:0.4em;
    }
    align-items:flex-start;
}
 @media screen and (min-width: 1024px) {
    margin:9% 0%;
    font-size:6vw;
 }

`