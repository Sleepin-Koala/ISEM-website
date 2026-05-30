import { Route, Routes, BrowserRouter } from "react-router-dom";
import Showcase from "./showcase/main"
import Ideas from "./ideas/main"

export default function App(){
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Showcase/>}/>
          <Route path="/ideas" element = {<Ideas/>}/>
        </Routes>
      </BrowserRouter>
  )
}





