import axios from "axios";
import { useDispatch } from "react-redux";
import { options, Upcoming_Movie } from "../utils/constant";
import { getUpcomingMovie } from "../redux/movieSlice";




const useUpcomingMovies = async () =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(Upcoming_Movie, options);
      console.log(res);
      dispatch(getUpcomingMovie(res.data.results));
    } catch (error) {
       console.log(error);
    }
  }

  export default useUpcomingMovies;