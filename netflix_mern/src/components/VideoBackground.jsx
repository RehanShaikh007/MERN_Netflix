import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId, bool}) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);
 

  useMovieById(movieId);
  
  
  return (
    <div className='w-[vw] overflow-hidden'>
         <iframe className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=39OR1bQ2bg0MjFX8&autoplay=1&mute=1&loop=1&playlist=${trailerMovie?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen
        allowFullScreen
        ></iframe>
    </div>
  )
}

export default VideoBackground
