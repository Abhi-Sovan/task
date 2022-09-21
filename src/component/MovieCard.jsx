import React from 'react'
import { useContext } from 'react'
// import { NavLink } from 'react-router-dom'
import { movieContext } from '../Api/MovieContext'
import "../Style/Card.css"
import playbutton from "../assets/playbutton.svg"



const MovieCards = () => {

  let movies = useContext(movieContext)
  console.log("MoviesCard: ", movies)
  return (
    <div className="container2">
   <h2 className='text'>Trending</h2>  
      <div className="row justify-content-center d-flex flex-wrap mt-4">
        {movies.map((items) => {
          return (<div className=" col col-md-4 col-lg-3 col-sm-6 gap-3">
            {/* <NavLink className="nav-link" to={"/" + items.id}> */}
              <div className="cards mt-3" key={items.key}>
                <img className="card-img-top" src={items.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + items.backdrop_path : 'https://planetcode.in/assets/images/default-image-png-9-300x200.png'} alt={items.title} />
                <div className='d-flex align-end title'>
                  <div className="card-body">
                    <p className="card-text text-white">{items.title}</p>
                    <p className="card-text"><i className="fa fa-star me-3"></i><span>{items.vote_average} / 5</span></p>
                    <img src={playbutton} className="play" type="button" />
                  </div>
                </div>
              </div>
            {/* </NavLink> */}

          </div>

          )
        })}

      </div>


    </div>

  )
}

export default MovieCards