// import React, { useEffect, useState } from "react"
import { useEffect, useState } from "react"
import Card from "../../compnents/Card"
import Header from "../../compnents/Header"


const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/movie/getAllMovieList")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
       
        <div>
            <Header/>
        <div className="homeContainer">
            <Card/>
        </div>
           </div>       
    )
}

export default Home

