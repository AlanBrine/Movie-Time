import styled from "styled-components";
import {Link } from "react-router-dom"


export const LinkA = styled(Link)`
text-decoration: none;
outline: none;
color: #000;

`

export const Bodycard = styled.div`
padding: 5px;
border: 2px solid #080808;
flex-shrink:0;
margin:1em;

>img{
width: 40vw;
}
@media screen and (min-width: 948px) {
    >img{
        width: 20vw;
    }
}
`

export const Info = styled.div`
font-size:min(23px, max(1.5vw + 7px));
width: 40vw;


>h2{
margin: 4px 2px;
    font-size: 1em;
}
@media screen and (min-width: 725px) {
    font-size:1.5vw;
    width:20vw
}


`