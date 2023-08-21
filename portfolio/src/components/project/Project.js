import React from 'react'
import './project.css'
import { Link } from 'react-router-dom';

const Project = ({project}) => {
  // console.log(project.description)
  const {projectTitle, description , image, techStack , projectLink} = project;
  return (
    <div className='project'>
      <Link to={projectLink}>
        <div className="project-image-container">
          <img src={image} alt='projectCover' className='project-cover-img'/>
        </div>
      </Link>
      <h3>{projectTitle}</h3>
      <p className='project-description'>{description}</p>
      <div className="tech-stack">
        <span className='tech-stach-heading'>Tech Stack : </span><span>{techStack} </span>
      </div>
    </div>
  )
}

export default Project
