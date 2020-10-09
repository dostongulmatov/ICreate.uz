import React from 'react'
import Nav from "./Nav"
import CenteredHeading from "./CenteredHeading"
import Carousel from "./TeamMembers/Carousel"
import CreateObject from "./Projects/Projects"
import ProjectsObject from "../ProjectsObject"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      <section className="home-page" id="home-page">
        <Nav />
        <CenteredHeading />
      </section>
      <section id="team-page">
        <h4 className="team-page-heading">Team Members</h4>
        <Carousel />
      </section>
      <section id="Portfolio-page">
        <h5 className="portfolio-page-heading">Portfolio</h5>
        <div className="row project-pictures">
          {ProjectsObject.map(CreateObject)}
        </div>
        <h6 className="portfolio-description-heading">Hover pictures in order to check full information about these projects.</h6>
      </section>
      <section id="footer-part">
        <Footer />
      </section>
      <div className="copyright-text">
        <span>&#169; Copyright ICREATE.uz 2020. All rights reserved.</span>
      </div>
    </div>
  )
}

export default App
