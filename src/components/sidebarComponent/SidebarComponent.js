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
const categories = [
  { name: "about", label: "About" },
  { name: "experience", label: "Experience" },
  { name: "education", label: "Education" },
  { name: "skills", label: "Skills" },
  { name: "interests", label: "Interests" }
];
class SidebarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { active: "about" };
  }

  primeHover = id => {
    console.log(id);
  };

  isActive = id => {
    console.log(this.state.active);
    console.log(id);
    return id === this.state.active ? "active" : id;
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
              {categories.map(({ name, label }) => (
                <li key={name} className={`item ${this.isActive(name)}`} on>
                  <a
                    className="ui header"
                    href={`#${name}`}
                    onClick={() => this.setState({ active: name })}
                    onMouseOver={() => this.primeHover(name)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              ]
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SidebarComponent;
