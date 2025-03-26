import { Route, Routes } from "react-router-dom"
import {useState} from "react"
import Home from "../pages/Home/Home.jsx"
import Video from "../pages/Video/Video.jsx"
import NavBar from "./navBar/NavBar.jsx"


function App() {
 const [sidebar,setSidebar] = useState(true);

  return (
    <>
     <NavBar setSidebar={setSidebar}/>
    <Routes>
      <Route  path="/" element={<Home sidebar={sidebar}/>}/>
      <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
    </Routes>

   
    </>
  )
}

export default App
