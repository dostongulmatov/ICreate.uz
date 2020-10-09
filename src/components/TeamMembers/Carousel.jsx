import React from 'react'
import dostonImage from "../images/dostonImg.jpg"
import aliImage from "../images/ali-profile-image.jpg"



const Carousel = () => {
  return (
    <div id="demo" className="team-members-carousel carousel slide" data-ride="carousel">
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          
          <h5 className="member-name">Gulmatov Doston Baxromjon ugli</h5>
          <div className="left-container">
            <p className="member-info">Entry-level Front-end developer, student at Amity university
            (studying in the field of Computer Science and engineering), Founder of ICreate.uz</p>
            <button className="skills-btn btn btn-lg btn-light">check skills</button>
            <button className="btn btn-md btn-outline-light">Resume</button>
          </div>
          <div className="right-container">
          <img class="profile-image" src={ dostonImage } alt="" />
          </div>
        </div>

        <div className="carousel-item">

          <h5 className="member-name">Toshmatov Ali Abduraimzoda</h5>
          <div className="left-container">
            <p className="member-info">Entry-level Front-end developer(have knovledge in C++ and Java programming languages also), 
            student at Inha university, Founder of ICreate.uz</p>
            <button className="skills-btn btn btn-lg btn-light">check skills</button>
            <button className="btn btn-md btn-outline-light">Resume</button>
          </div>
          <div className="right-container">
          <img class="profile-image" src={ aliImage } alt="" />
          </div>
        </div>
      </div>
      
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
      
    </div>
  )
}

export default Carousel;
