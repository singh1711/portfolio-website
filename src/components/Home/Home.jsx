import React from 'react'
import Navbar from '../navbar/Navbar'
import "./home.css"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <section className="home">
            <div className='homeContent'>
                <span className='hello'>Hello,</span>
                <span className='intro'>I'm <span className='name'>Abhishek</span> <br />Web Developer</span>
                <p className='content'>I am a Full Stack Web Developer with experience of creating Websites using MERN Stack.</p>
                <button className='btn'><Link to="https://drive.google.com/file/d/1eTH_XCu2JM8qIhSlN2yadDWO0FyxnO8b/view?usp=sharing">Resume</Link></button>
            </div>
            
            <img src="src/assets/Abhishek_PP_New.JPG" alt="" className='bg'/>
            
        </section>
        <Footer/>
    </div>
  )
}

export default Home