import axios from "axios"
import { useEffect, useState } from "react"

export function Api() {
    const [movie, setMovie] = useState([])


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5b5c37461ed945b3fd4159ce828bb7c6&language=en-US&page=1").then(a => setMovie(a.data.results))
    }, [])


    return( movie)} 
