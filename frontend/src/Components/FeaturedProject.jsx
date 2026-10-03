import React from 'react'
import { Link } from "react-router-dom";
const FeaturedProject = () => {
  return (
    <>
    <div id='featured' className='featuredProject'>
      <h1>Featured Project</h1>
      <div className='featuredSection'>
        <img src="/images/featuredProject.png" alt="featuredProject" />
        <div className='featuredRightSection'>
          <h3>A scenario-based e-learning experience designed to bolster employee engagement</h3>
          <p>This concept project was created to teach managers how to foster a culture of employee engagement and value positively.</p>
          <a href="/featured-project" className="detailsButton"><button>
  Get the details
</button></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeaturedProject  ;