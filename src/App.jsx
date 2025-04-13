import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import StatsBox from './Components/reusable/StatsBox'
import { useState } from 'react'
import Settings from './Components/Settings'

function App() {
 

  
  return (
    <>
    <div className='max-w-5xl bg-[#121715] h-150 mx-auto mt-8 rounded-4xl'
    style={{'boxShadow': '9px 20px 120px rgb(50, 50, 50)'}}
    >

      <Nav />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/settings' element={<Settings />}/>
      </Routes>
    </div>
   

    </>
  )
}

export default App
