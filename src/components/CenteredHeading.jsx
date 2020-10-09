import React, { Component } from 'react'
import Typical from 'react-typical'


const CenteredHeading = () => {
  return (
    <div className="home-page-centered-text">
      <h2 className="centered-heading">{
        <Typical
          steps={['Have a dream of making your own website?',2000, 'You are in the right place.', 1000, 
          'Tell about your dream website. Maybe we can help.', 1000]}
          loop={Infinity}
          wrapper="_"
        />
      }</h2>
      <a href="#footer-part" className="centered-button centered-button1 btn btn-lg">Contact us</a>
      <a href="resume.html" className="centered-button centered-button2 btn btn-primary btn-lg">Resume</a>
    </div>
  )
}

export default CenteredHeading
