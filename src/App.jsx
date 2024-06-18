import React from 'react'


import Home from './Components/Home'
import Op from './Op/page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    
    <BrowserRouter>
       
      <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="allMov" element={<Op/>} />
          
          
      </Routes>
    </BrowserRouter>
  );
}

export default App