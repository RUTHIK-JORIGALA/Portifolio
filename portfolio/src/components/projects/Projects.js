import React from 'react'
import './projects.css'
import Project from '../project/Project'
import data from '../../data.json'
const Projects = () => {
  // console.log(data.projects[0])
  return (
    <div className="projects-container">
      <h2>My projects</h2>
      <div className='projects'>
        {

          data.projects.map((project,index)=>{
            return <Project key={index} project={project}/>
          })
        }
      </div>

    </div>
  )
}

export default Projects
