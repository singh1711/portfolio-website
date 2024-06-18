import React, { useRef } from 'react'
import Navbar from '../navbar/Navbar'
import "./project.css"
import ProjectCard from './projectCard/ProjectCard'
import { Projects } from '../../utils/data'
import Slider from 'react-slick'
import Footer from '../Footer/Footer'

function Project() {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint:769,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight =()=>{
    slideRef.current.slickNext();
  };
  const slideLeft= ()=>{
    slideRef.current.slickPrev();
  };

  return (
    <>
        <Navbar/>
        <section className="project-container">
          <h5>Projects</h5>
          <div className="project-content">
            <div className="arrow-right" onClick={slideRight}>
              <span class={"material-symbols-outlined"}>&gt;</span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
              <span class={"material-symbols-outlined"}>&lt;</span>
            </div>
            <Slider ref={slideRef} {...settings}>
              {Projects.map((item)=>(
                <ProjectCard key={item.project_name} details={item}/> 
              ))}
            </Slider>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Project