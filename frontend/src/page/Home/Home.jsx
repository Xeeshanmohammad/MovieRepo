import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "../../compnents/card/Card";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/movie/getAllMovieList")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
       
            <div> 
               
            </div>
       
    )
}

export default Home