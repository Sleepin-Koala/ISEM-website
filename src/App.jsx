import { Route, Routes, BrowserRouter } from "react-router-dom";
import Showcase from "./showcase/main"
import Projects from "./project_view/main"

export default function App(){
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Showcase/>}/>
          <Route path="/projects" element = {<Projects/>}/>
        </Routes>
      </BrowserRouter>
  )
}





