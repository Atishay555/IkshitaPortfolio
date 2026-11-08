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
          <h3>A scenario based e-learning experience designed to strengthen stakeholder collaboration and project alignment.</h3>
          <p>This project helps learners navigate real world stakeholder interactions and make informed decisions for successful project outcomes.</p>
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