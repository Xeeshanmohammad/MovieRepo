import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Cards from "../../compnents/card/Card";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/movie/getAllMovieList")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <Cards />
            </div>
        </>
    )
}

export default Home