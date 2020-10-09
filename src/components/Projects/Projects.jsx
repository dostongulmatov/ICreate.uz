import React from 'react'
import ProjectsObject from '../../ProjectsObject';
import Project from "./Project"
// // import Dasturlash from "../images/Dasturlash.png"
// // import gentech from "../images/gentech.jpg"
// import mobilo from "../images/mobilo.jpg"
// import ProjectsObject from "../../ProjectsObject";

// function Projects(props){
//   return (
//   <div className={props.BootstrapClassName}>
//   <a href={props.link}>
//     <img className="portfolio-picture" src={mobilo} alt="" />
//   </a>
//   <h5 className="project-link"><a href={props.link}>{props.name}</a></h5>
// </div>)
// }
function CreateObject(ProjectObject) {
  return (
  <Project 
    name={ProjectObject.name}
    link={ProjectObject.link}
    imgName={ProjectsObject.imgName}
    key={ProjectsObject.id}
    />)
}



      /* <div className="project2 container col-sm-12 col-md-6 col-lg-4">
        <a href="gentech.uz">
          <img className="portfolio-picture" src={gentech} alt="" />
        </a>
        <h5 className="project-link"><a href="">Gentech.uz</a></h5>
      </div>
      <div className="project3 container col-sm-12 col-md-6 col-lg-4">
        <a href="dasturlashinfo.uz">
          <img className="portfolio-picture" src= {Dasturlash} alt="" />
        </a>
        <h5 className="project-link"><a href="">Dasturlashinfo.uz</a></h5>
      </div>
//     </div> */
//   )
// }
export default CreateObject;
