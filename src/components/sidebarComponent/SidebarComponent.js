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
  setActive = () => {
    console.log(this.props.location);
  };

  primeHover = id => {
    console.log(id);
  };

  render() {
    console.log(this.props.location);
    return (
      <nav
        className="ui three wide tablet only three wide computer only column "
        id="sideNav"
        style={sideBarStyle}
      >
        <a
          className="item centered "
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
        <div
          className="ui inverted vertical borderless fuild tabular menu"
          style={menu}
        >
          <div className="" id="navbarSupportedContent">
            <ul className="">
              <li className="item ">
                <a className="ui header" href="#about">
                  About
                </a>
              </li>
              <li className=" active item">
                <a
                  className="ui   header"
                  href="#experience"
                  onMouseOver={() => this.primeHover("experience")}
                >
                  Experience
                </a>
              </li>
              <li className="item">
                <a className=" ui header" href="#education">
                  Education
                </a>
              </li>
              <li className="item">
                <a className="ui header" href="#skills">
                  Skills
                </a>
              </li>
              <li className="item">
                <a className=" ui header" href="#interests">
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
