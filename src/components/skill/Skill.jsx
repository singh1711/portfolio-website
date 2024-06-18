import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./skill.css"
import { SKILLS } from '../../utils/data'
import SkillCard from './skillCard/SkillCard'
import SkillInfoCard from './SkillInfoCard/SkillInfoCard'
import Footer from '../Footer/Footer'

function Skill() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data)=>{
    setSelectedSkill(data)
  }

  return (
    <>
      <Navbar/>
      <section className='skill-container'>
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item)=>(
              <SkillCard 
                key ={item.tittle}
                iconUrl ={item.icon}
                tittle ={item.tittle}
                isActive={selectedSkill.tittle === item.tittle}
                onClick={()=>{
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillInfoCard
              heading={selectedSkill.tittle}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Skill