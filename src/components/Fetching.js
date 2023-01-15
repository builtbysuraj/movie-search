import { CircularProgress } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import './Fetching.css'

const Fetching = ({ movieInput }) => {

  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=deaa6dd4&t=${movieInput}`)
      .then(res => setMovieDetails(res.data))
      .catch((res) => console.log(res.data.Error))

  }, [movieInput])


  const { Title, Released, Genre, Director, Poster, BoxOffice, Plot, Writer, Awards, imdbRating, Actors, Country } = movieDetails || {}
  return (
    <>
      <div className="useInput">You searched <strong> <em>{movieInput}</em> </strong> </div>
      {
        movieDetails ? <div className="flex-container">

          <img src={Poster} alt="Movie Pic" />
          <div className="details">
            <div className="all" > <strong>Title: </strong> {Title}</div>
            <div className="all" ><strong>imdb Rating:</strong> {imdbRating}</div>
            <div className="all"><strong>Released: </strong> {Released}</div>
            <div className="all" ><strong>Plot: </strong>{Plot}</div>
            <div className="all"><strong>Genre: </strong> {Genre}</div>
            <div className="all" ><strong>Actors:</strong> {Actors}</div>
            <div className="all"><strong>Director: </strong> {Director}</div>
            <div className="all" ><strong>Writer:</strong> {Writer}</div>
            <div className="all" ><strong>Country:</strong> {Country}</div>
            <div className="all" ><strong>BoxOffice:</strong> {BoxOffice}</div>
            <div className="all" ><strong>Awards:</strong> {Awards}</div>
          </div>
        </div>
          : <CircularProgress/>
      }

    </>
  )
}

export default Fetching