import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../../compnents/card/Card'
import Header from '../../compnents/Header/Header'

const Movie = () => {
    const [data, setData] = useState([])

    function fetchData(){
        fetch('http://localhost:8080/api/movie/getAllMovieList').then(response=>{
            return response.json();
        }).then(data=>{
              console.log(data)
        })
    }

    useEffect(()=>{
        fetchData()
},[])

const fetchAPIHandler = (Move)=>{
    fetch('http://localhost:8080/api/movie/createMovie',{
        method:'POST',
        body:JSON.stringify(Move),
        headers:{
            "content-Type":'application/json'
        }
    }).then(response=>{
        fetchData()
    })
}

  return (
      <div>
<Header />
    <Card/>
<button className="getAllMovie" onClick={()=>setData(data)}></button>
</div>
   
  )
}

export default Movie

