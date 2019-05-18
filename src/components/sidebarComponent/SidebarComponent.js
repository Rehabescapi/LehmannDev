import React, { Component } from "react";

import profile from "./img/profile.jpg";

class SidebarComponent extends Component {
  render() {
    return (
      <nav className="ui sidebar visible inverted vertical menu" id="sideNav">
        <a className="item" href="#page-top">
          <span className="">Jason Lehmann</span>
          <span className="">
            <img
              className="ui fluid image"
              src={profile}
              alt="Jason Profile Pic"
            />
          </span>
        </a>
        <button
          className=""
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="" />
        </button>
        <div className="" id="navbarSupportedContent">
          <ul className="">
            <li className="item">
              <a className="" href="#about">
                About
              </a>
            </li>
            <li className="item">
              <a className="item" href="#experience">
                Experience
              </a>
            </li>
            <li className="item">
              <a className="" href="#education">
                Education
              </a>
            </li>
            <li className="item">
              <a className="" href="#skills">
                Skills
              </a>
            </li>
            <li className="item">
              <a className="" href="#interests">
                Interests
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SidebarComponent;
