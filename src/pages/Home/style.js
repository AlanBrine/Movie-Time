import styled from "styled-components";
import eader from "../../assets/image/popcorn.jpeg"



export const Bodyhome = styled.div`
height:100vh;
 font-size:min(16px, max(6vw, 6px));


>h1{
    margin: 5vh 2vw;
    font-size:2em;
}

`
export const Hero = styled.header`
 
 background-image: url(${eader});
 background-size:cover;
 background-repeat: no-repeat;
background-position:center center;
height:100vmin;


`
export const Container = styled.section`
margin:5vh 0;
display: flex;
flex-wrap:wrap;
justify-content:center;
gap: 25px;







`

