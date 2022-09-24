import { useParams } from "react-router-dom";
import { Api } from "../../assets/api/api";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Body, Button, LinkBnt, Info, Container } from "./style"



export function Detalhes() {
    const { id } = useParams()
    const value = id.replace(":", " ")
    var title
    var imgMobile
    var sinops
    var average
    var hightImg
    Api().filter(elements => elements.id == value).map((movies) => {
        title = movies.title; imgMobile = movies.backdrop_path;
        sinops = movies.overview;
        average = movies.vote_average
        hightImg = movies.poster_path
    })


    return (
        <>
            <Body>
                <Navbar name={title} />
                <Container>

                <img className="mobileImg" src={`https://image.tmdb.org/t/p/w500${imgMobile}`} alt={title} />
                <img className="hightImg" src={`https://image.tmdb.org/t/p/w500${hightImg}`} alt={title} />
                <Info>
                <p className="stats"> <strong>Nota: </strong> {average}</p>
                <p className="stats"> <strong>Titulo: </strong> {title}</p>
                <p>
                    <strong>Sinopse:</strong> {sinops}
                </p>
               <Button> <LinkBnt to="/">Voltar para Home </LinkBnt></Button>
                </Info>
                 
                </Container>
              <Footer />  
            </Body>
       
        </>
    )
}