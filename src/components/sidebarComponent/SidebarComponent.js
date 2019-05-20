import React, { Component } from "react";

import profile from "./img/profile.jpg";

var sideBarStyle = {
  position: "fixed",
  height: "100%",
  backgroundColor: "#626262",
  color: "black",
  paddingTop: "68px",
  paddingLeft: "20px",
  paddingRight: "20px"
};

var menu = {
  color: "black"
};

class SidebarComponent extends Component {
  render() {
    return (
      <nav
        className="ui three wide tablet only three wide computer only column "
        id="sideNav"
        style={sideBarStyle}
      >
        <div
          className="ui inverted vertical borderless fuild text menu"
          style={menu}
        >
          <a
            className="item   centered "
            href="#page-top"
            style={{ padding: "10px" }}
          >
            <span className="">Jason Lehmann</span>
            <span className="">
              <img
                className="ui rounded  centered image"
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
        </div>
      </nav>
    );
  }
}

export default SidebarComponent;
