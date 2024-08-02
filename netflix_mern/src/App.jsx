import {Toaster} from "react-hot-toast"

import Body from './components/Body'
import MovieDialog from "./components/MovieDialog"

function App() {
  

  return (
    <div className="bg-black h-screen">
      <Body/>
      <Toaster/>
      <MovieDialog/>
    </div>
  )
}

export default App
