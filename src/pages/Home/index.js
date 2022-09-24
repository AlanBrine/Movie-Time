import Navbar from "../../components/navbar"
import { Api } from "../../assets/api/api"
import { Bodyhome, Hero, Container } from "./style"
import { Footer } from "../../components/footer"
import { Card } from "../../components/card"


export function Home() {


    return (
        <Bodyhome>
            <Navbar name="Home" />
            <Hero />
            <h1>Filmes Populares</h1>
            <Container>
                { Api().map((movies) => { return (<Card key={movies.id} id={movies.id} name={movies.title} img={movies.poster_path} avarege={movies.vote_average} />) })
                }

            </Container>
            <Footer />
        </Bodyhome>

    )
}