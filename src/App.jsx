import { Route, Routes, BrowserRouter } from "react-router-dom";

import Showcase from "./showcase/main"

function App(){
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Showcase/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App




