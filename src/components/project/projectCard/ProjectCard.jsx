import React from 'react'
import "./ProjectCard.css"

function ProjectCard({details}) {
  return (
    <div className='project-card'>
        <h5>{details.project_name}</h5>
        <div className="tech-used">{details.tech_used}</div>
        <ul>
            {details.description.map((item)=>{
                <li key={item}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default ProjectCard