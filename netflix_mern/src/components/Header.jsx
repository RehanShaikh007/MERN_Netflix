import axios from "axios";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";


const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-4 md:px-6 bg-gradient-to-b from-black py-3">
    {/* Logo */}
    <img src="logo.png" alt="Netflix Logo" className="w-40 md:w-30 sm:w-15" />

    {/* User Section */}
    {user ? (
      <div className="hidden md:flex items-center space-x-4">
        <IoIosArrowDropdown color="white" size="24px" />
        <h1 className="text-lg font-medium text-white">{user.fullName}</h1>
        <div className="ml-4 flex space-x-2">
          <button className="bg-red-800 text-white px-4 py-2 rounded-sm" onClick={logoutHandler}>
            Logout
          </button>
          <button
            onClick={toggleHandler}
            className="bg-red-800 text-white px-4 py-2 rounded-sm"
          >
            {toggle ? "Home" : "Search Movie"}
          </button>
        </div>
      </div>
    ) : null}
  
  </div>
  );
};

export default Header;
