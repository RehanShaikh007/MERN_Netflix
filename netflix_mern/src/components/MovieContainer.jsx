import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie = useSelector(store => store.movie);
  



  return (
    <div className='bg-black text-white'>
      <div className='-mt-72 relative z-10'>
        <div className='mb-4'>
        <MovieList title={"Popular Movie"} movies={movie.popularMovie}/>
        </div>
         <div className='mb-4'>
         <MovieList title={"Now Playing Movie"} movies={movie.nowPlayingMovies}/>
         </div>
          <div className='mb-4'>
          <MovieList title={"Top Rated Movie"} movies={movie.topRatedMovies}/>
          </div>
            <div className='mb-4'> 
            <MovieList title={"Upcoming Movie"} movies={movie.upcomingMovies}/>
            </div>
    
      </div>
    </div>
  )
}

export default MovieContainer
