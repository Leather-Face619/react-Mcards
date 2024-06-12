import React from 'react'
import Cardsss from './Components/Card'
import Scrollbtn from './Components/Scrollbtn'
import Navi from './Components/Nav'
import Op from './Op/page'
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
      {/* <Navi/>
      <Routes>
          <Route path="/Op" element={<Op/>} />
         
        </Routes> */}
      <Cardsss />
      <Scrollbtn />
    </>
  )
}

export default App