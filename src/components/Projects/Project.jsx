  import React from 'react'
  import Mobilo from "./mobilo.jpg";
  // import Dasturlash from "./Dasturlash.png";
  // import Gentech from "./gentech.jpg";

  function Project(props){
    return (
    <div className="project1 container col-sm-12 col-md-6 col-lg-2">
      <a href={props.link}>
        <img className="portfolio-picture" src={Mobilo} alt="" />
      </a>
      <h5 className="project-link"><a href={props.link}>{props.name}{props.key}</a></h5>
    </div>)
  }

export default Project; 