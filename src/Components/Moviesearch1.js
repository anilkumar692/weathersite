import React, { useState } from 'react'
import axios from 'axios'
import './MovieSearch.css'

function Moviesearch1() {
  const [moviedata, setmoviedata] = useState({
    movie_name: "",
    movie_actor: "",
    IMBD_rating: "",
    country: " ",
    run_time:" ",

    movie_poster: ""
  })
  const [moviename, setmoviename] = useState('')
  const handlechangeclick = () => {
    // console.log("chaggg")
    const ApiUrrl = `http://www.omdbapi.com/?t=${moviename}&apikey=8b756a2f`
    axios.get(ApiUrrl)
      .then(res => {

        setmoviedata({
          ...moviedata, movie_name: res.data.Title,
          movie_actor: res.data.Actors, movie_poster: res.data.Poster,
          country: res.data.Country,
          IMBD_rating: res.data.Ratings[0].Value,
          run_time:res.data.Ratings.Runtime


        })
        console.log(res.data)


      })
  }
  return (

    <div className="container">
      <div className="searchbar">
        <input type="text" name="" id="" onChange={e => setmoviename(e.target.value)} value={moviename} />
        <button onClick={handlechangeclick}>search</button>
      </div>
      <div className="hero">
        <div className="movieposter">
          <img src={moviedata.movie_poster} alt="ddd" />
        </div>
        <div className="moviedetails">
          <h3>Movie Name:{moviedata.movie_name}</h3>
          <h3>Movie Actor :{moviedata.movie_actor}</h3>
          <h3>IMBD        :{moviedata.IMBD_rating}</h3>
          <h3>country     :{moviedata.country}</h3>
          <h3>Run_time:{moviedata.run_time}</h3>


        </div>
      </div>
    </div>



  )
}

export default Moviesearch1
