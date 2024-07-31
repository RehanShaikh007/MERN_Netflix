import { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';
import netflix_spinner from "../assets/netflix_spinner.gif";


const Login = () => {
    const [isLogin, setisLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector(store => store.app.isLoading);


    const loginHandler = () => {
        setisLogin(!isLogin);
    }
    
    const getInputData = async (e) =>{
       e.preventDefault();
       dispatch(setLoading(true));
       if(isLogin){
           const user = {email, password};
           try {
             const res = await axios.post(`${API_END_POINT}/login`, user, { headers:{
                "Content-Type": "application/json",
             }, 
            //  withCredentails: true

            } );
            console.log(res);
            
             if(res.data.success===true){
                toast.success(res.data.message);
               //  console.log("login done");
                console.log(res.data.user);
                dispatch(setUser(res.data.user));
               //  console.log("redux done");
                navigate('/browse');
                console.log("Navigated");
             }
            //  console.log(res.data.message);
           } catch (error) {
            toast.error(error.response.data.message);
              console.log(error);
           } finally{
              dispatch(setLoading(false));
           }
       } else{
       dispatch(setLoading(true));

        const user = {fullName, email, password};
        try {
          const res = await axios.post(`${API_END_POINT}/register`, user, { headers:{
                "Content-Type": "application/json",
             }, 
            //  withCredentails: true

          });
          console.log(res);
          if(res.data.success){
            toast.success(res.data.message);
          }
          setisLogin(true);
        } catch (error) {
            toast.error(error.response.data.message);
           console.log(error);

        } finally{
           dispatch(setLoading(false));

        }
       }
      
       setFullName("");
       setEmail("");
       setPassword("");
    }

  return (
    <div>
        <Header/>
        {
        isLoading && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <img className="w-20px rounded-md" src={netflix_spinner} alt="loading-spinner"/>
      </div>
      }
         <div className='absolute'>
            <img className='w-[100vw] h-[100vh] bg-cover' src="bg.jpg" alt="banner" />
         </div>
         <form onSubmit={getInputData} className='absolute flex items-center justify-center w-3/12 mx-auto flex-col my-36 left-0 right-0 bg-black p-12 opacity-90 rounded-md'>
         <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Sign Up"}</h1>
            <div className='flex flex-col'>
                {
                    !isLogin &&  <label className='text-gray-400'>Full Name</label>
                }
                
                {
                    !isLogin &&  <input className='outline-none p-3 my-2 rounded-md bg-gray-600 text-white' type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                } 
               
                <label className='text-gray-400'>Email</label>
                <input type="email"  value={email}className='outline-none p-3 my-2 rounded-md bg-gray-600 text-white' onChange={(e)=>setEmail(e.target.value)}/>
                <label className='text-gray-400'>Password</label>
                <input type="password" value={password} className='outline-none p-3 my-2 rounded-md bg-gray-600 text-white' onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' className='bg-red-800 mt-6 p-3 text-white rounded-md font-bold mb-4'>{`${isLoading ? "Loading..." : (isLogin ? "Login" : "SignUp")}`}</button>
                <p className='text-white'>{isLogin ?  "New To Netflix?" : "Already Have An Account?"} <span onClick={loginHandler} className='ml-1 font-medium text-red-500 cursor-pointer'>{isLogin ? "SignUp" : "Login"} </span></p>
            </div>
         </form>
    </div>
  )
}

export default Login
