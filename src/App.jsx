import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Project from './components/project/Project'
import Portfolio from './components/portfolio/Portfolio'
import Skill from './components/skill/Skill'
import ContactMe from './components/contactMe/ContactMe'

function App() {
  return (
    <div>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/skill' element={<Skill/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<ContactMe/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App