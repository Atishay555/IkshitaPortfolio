import React from 'react'

const MyProcess = () => {
  return (
    <div className='MyProcess'>
      <h1>My Process</h1>
      <p>With the goal of improving stakeholder collaboration and project outcomes, I followed the ADDIE model to design a practical, scenario-based learning experience. The process began with action mapping to identify the key workplace behaviours learners needed to develop. These insights were then translated into a scenario-based storyboard featuring realistic workplace situations and decision points. Next, I created high-fidelity visual mockups in Figma to establish a clean, intuitive user experience, followed by an interactive prototype to validate the learner flow and branching logic. The final module was developed in Articulate Storyline 360, resulting in an engaging, decision-driven learning experience that mirrors real-world stakeholder interactions.</p>
      <div className='ProcessTab'>
        <a href="#action" className='Processbtn'>
       Action Mapping
      </a>
      <a href="#prototype"className='Processbtn'>
      Interactive Prototype
      </a>
      <a href="#storyboard" className='Processbtn'>Text-based Storyboard
      </a>
      <a href="#development" className='Processbtn'>Full Development
      </a>
      <a href="#mockup" className='Processbtn'>Visual Mock-up
      </a>
      <a href="#results" className='Processbtn'>
      Results & Takeaways
      </a>
      </div>
    </div>
  )
}

export default MyProcess