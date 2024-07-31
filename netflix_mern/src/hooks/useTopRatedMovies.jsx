import axios from "axios";
import { useDispatch } from "react-redux";
import { Now_Playing_Movie, options, Top_Rated_Movie } from "../utils/constant";
import { getNowPlayingMovies, getTopRatedMovie } from "../redux/movieSlice";



const useTopRatedMovies = async () =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(Top_Rated_Movie, options);
      console.log(res);
      dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
       console.log(error);
    }
  }

  export default useTopRatedMovies;