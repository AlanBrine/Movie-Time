
import {Bodycard, Info, LinkA} from "./style"

export function Card({id, name, img, avarege}){
console.log(name)
 return(
<LinkA to={`/Detalhes/:${id}`}>
<Bodycard>
   
    <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={name}/>
    <Info>
        
        <h2>Title: {name}</h2> 
        <span>Avarege: {avarege}</span>
   
    </Info>
</Bodycard>

</LinkA>

)
}