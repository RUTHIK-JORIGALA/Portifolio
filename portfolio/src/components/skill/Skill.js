import React from 'react'
import './skill.css'
const Skill = (props) => {
    const {imgUrl,skillName } =props 
    return (
    <div className='skill'>
      <figure>
        <img src={imgUrl} alt='skill' className='skill-Image'/> 
      <figcaption>{skillName}</figcaption>
      </figure>

    </div>
  )
}

export default Skill
