import React from 'react'
import './skills.css'
import Skill from '../skill/Skill';
import data from '../../data.json'
const Skills = () => {
  return (
    <div className='skills'>
      {/* <img src={imgUrl}/> */}
      <h1>My <span>Technical</span> skills</h1>
      <div className="skills-container">
        {
          data.skills.map((skill,index)=><Skill key={index} imgUrl={skill.imageUrl} skillName={skill.skill_name} />)
        }
      </div>
      
    </div>
  )
}

export default Skills
