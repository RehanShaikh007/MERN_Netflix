import axios from "axios";
import React, { useState } from "react";
import { options, SEARCH_MOVIE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMov = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector((store) => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data);

      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <>
    <div className="bg-black w-[100%] opacity-95 h-[860px]">
      <img className="absolute -z-10 opacity-50" src="bg.jpg" alt="" />
    <div className="relative z-50 flex justify-center pt-[10%] w-[100%]">
        <form onSubmit={submitHandler} className="w-[50%]">
          <div className="flex justify-between shadow-md border-gray-200 rounded-lg w-[100%]">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-full outline-none rounded-md text-lg p-2"
              type="text"
              placeholder="Search Movies..."
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {
        searchedMovie ? (  <MovieList title={movieName} movies={searchedMovie} searchMovie={true}/>) : (<h1>Movie Not Found!</h1>)
      }
   
    </div>
     

    </>
  );
};

export default SearchMov;
