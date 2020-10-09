import React from 'react'
import NetIcon from "./icons";
import CallIcon from '@material-ui/icons/Call';
import russia from "./images/russia.png"
import uzbekistan from "./images/uzbekistan.png"
import states from "./images/states.png"


const Nav = () => {
  return (
  <div className="new-navbar">
    <nav className="icreate-navbar navbar navbar-expand-lg navbar-light bg-D1FAFF">
      <a className="icreate-logo navbar-brand" href="#home-page">ICREATE.UZ</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="centered-links navbar-nav mr-auto">
          <li className="icreate-nav-links nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="icreate-nav-links nav-item">
            <a className="nav-link" href="#team-page">Team</a>
          </li>
          <li className="icreate-nav-links nav-item">
            <a className="nav-link" href="#Portfolio-page">Portfolio</a>
          </li>
        </ul>
        <ul className="navbar-nav">
        <li className="phone-number icreate-nav-links nav-item">
            <a className="nav-link" href="Tel: 996368565"><CallIcon className="call-icon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </CallIcon>(99) 636-85-65</a>
          </li>
          <li className="icreate-nav-links nav-item">
            <a className="nav-link" href=""></a>
            <div className="dropdown">
              <button type="button" className="language-button btn btn-primary dropdown-toggle" data-toggle="dropdown">
                <NetIcon />
              </button>
              <div className="language-dropdown dropdown-menu">
                <a className="website-languages dropdown-item" href="#">Uz<img className="country-flags" src={uzbekistan}/></a>
                <a className="website-languages dropdown-item" href="#">Ru<img className="country-flags" src={russia}/></a>
                <a className="website-languages dropdown-item" href="#">En<img className="country-flags" src={states}/></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default Nav
