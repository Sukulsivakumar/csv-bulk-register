import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Bulk from './Bulk'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Bulk/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
