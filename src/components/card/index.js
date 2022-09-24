import { Link } from "react-router-dom"
import {Bodycard, Info} from "./style"

export function Card({id, name, img, avarege}){
console.log(name)
 return(
<Link to={`/Detalhes/:${id}`}>
<Bodycard>
   
    <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="Fall"/>
    <Info>
        
        <h2>Name: {name}</h2> 
        <span>Avarege:{avarege}</span>
   
    </Info>
</Bodycard>

</Link>

)
}