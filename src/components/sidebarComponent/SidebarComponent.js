import React, { Component } from "react";
import { Link } from "react-router-dom";
import profile from "./img/profile.jpg";
import { Button, Image } from "semantic-ui-react";
var sideBarStyle = {
  position: "fixed",
  height: "100%",
  backgroundColor: "#626262",
  color: "black",
  paddingTop: "68px",
  paddingLeft: "20px",
  paddingRight: "20px"
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
          <Link to={"/"} onClick={() => this.props.onActiveChange("main")}>
            <Image
              rounded
              centered
              src={profile}
              alt="Jason Profile Pic"
              bordered
              className="profile"
            />
          </Link>
        </a>

        <div className="" id="navbarSupportedContent">
          <Button.Group inverted vertical fuild className="ui grey change">
            {categories.map(({ name, label }) => (
              <Button
                as={Link}
                to={`/${name}`}
                key={name}
                className={`item ${this.isActive(name)} `}
                onClick={() => this.props.onActiveChange(name)}
                trigger={this.primeHover(name)}
              >
                {label}
              </Button>
            ))}
          </Button.Group>
        </div>
      </nav>
    );
  }
}

SidebarComponent.defaultProps = {
  active: ""
};

export default SidebarComponent;
