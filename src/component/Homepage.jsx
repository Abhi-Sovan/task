import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import { movieContext } from '../Api/MovieContext';
import axios from "axios"
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
import banner from "../assets/banner.svg"



export default function Homepage({ url }) {
  let [movies, setMovies] = useState([])
  let [pageSelected, setPageSelected] = useState(1)
  let movie = useParams();
  useEffect(() => {
    console.log(movie);
    let API = `${url}?api_key=636e728bb94be43448a9ec17c78ccadf&language=en-US&page=${pageSelected}`;
    if (movie.id) {
      API += `&query=${movie.id}`;
    }
    console.log(API);
    axios
      .get(API)
      .then((response) => {
        setMovies(response.data.results || [])
        //  console.log(response.data)

      })
      .catch((error) => {
        console.error(error);
      });

  }, [pageSelected, movie])
  // console.log(movies)
  return (
    <React.Fragment>

      <div>
        <img src={banner} alt="" style={{ width: "100%"}} />
      </div>
      <movieContext.Provider value={movies}>
        <MovieCard ></MovieCard> 
      </movieContext.Provider>
      <footer className="footer d-flex justify-content-center bg-black">
      <div>
      <Pagination setPageSelected={setPageSelected} pageSelected={pageSelected}></Pagination>
      </div>
        </footer>
      </React.Fragment>
    
  )
}