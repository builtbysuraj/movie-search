import { useRef, useState } from 'react'
import Fetching from './Fetching'
import './Search.css'

const Search = () => {
  const inputRef = useRef()

 const [movieInput, setMovieInput] = useState('')

  function onClick () {
    setMovieInput(inputRef.current.value)
  }

  return (
    <div>
      <h1>Get details of any movie or web series</h1>
      <input placeholder='ex: wednesday, avengers ' ref={inputRef} type="text" />
      <br />
      <button onClick={onClick} >Search Movie</button>
   
      {
        movieInput && <Fetching movieInput = {movieInput}/>
      }
    </div>
  )
}

export default Search