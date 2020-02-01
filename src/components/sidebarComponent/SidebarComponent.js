import React, { Component } from "react";
import { Link } from "@reach/router";
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
const categories = [
  { name: "about", label: "About" },
  { name: "experience", label: "Experience" },
  { name: "education", label: "Education" },
  { name: "skills", label: "Skills" },
  { name: "interests", label: "Interests" }
];
class SidebarComponent extends Component {
  primeHover = id => {
    console.log(id);
  };

  isActive = id => {
    return id === this.props.active ? "active" : id;
  };

  render() {
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
              {categories.map(({ name, label }) => (
                <li key={name} className={`item ${this.isActive(name)}`} on>
                  <Link
                    to={`/${name}`}
                    className="ui header"
                    onClick={() => this.props.onActiveChange(name)}
                    onMouseOver={() => this.primeHover(name)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SidebarComponent;
