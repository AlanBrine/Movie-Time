import { useParams } from "react-router-dom";
import { Api } from "../../assets/api/api";
import Navbar from "../../components/navbar";
import { useState } from "react"
import { Footer } from "../../components/footer";
export function Detalhes() {





    const { id } = useParams()

    const value = id.replace(":", " ")

    var title

    Api().filter(elements => elements.id == value).map(filteredName => title = filteredName.title)


    return (
        <>
            <Navbar name={title} />

            <Footer/>
        </>
    )
}