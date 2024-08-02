import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies, searchMovie= false}) => {
  
  const movieArray = movies || []

  return (
    <div className='px-8'>
      <h1 className={`${searchMovie ? "text-white" : "text-white"}py-3 text-3xl text-white`}>{title}</h1>
      <div className='w-[100vw] flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
          {movieArray.map((movie) => {
              return(
            <MovieCard movieId= {movie.id} key={movie.id} posterPath={movie.poster_path}  className="w-48 p-2 flex-none"/>
            );
            })
          } 
          <MovieCard/>
        </div>
      </div>
    </div>
  )
}

export default MovieList
