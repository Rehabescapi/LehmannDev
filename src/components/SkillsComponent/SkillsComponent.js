import React, { Component } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ULVert = styled.ul`
  list-style-type: none;
`;
const IconUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const IconLI = styled.li`
  display: inline;
  padding-left: 1em;
  &:hover {
    color: #bd5d38;
  }
`;

class SkillsComponent extends Component {
  render() {
    return (
      <section
        className="resume-section  ui raised very padded text container border"
        id="skills"
      >
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <IconUL classname="dev-icons">
            <IconLI>
              <FontAwesomeIcon icon={["fab", "html5"]} size="3x" />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "css3-alt"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "wordpress"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "js-square"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "react"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "node-js"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "npm"]} />
            </IconLI>

            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "github"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "bitbucket"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "cpanel"]} />
            </IconLI>

            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "linux"]} />
            </IconLI>
            <IconLI>
              <FontAwesomeIcon size="3x" icon={["fab", "trello"]} />
            </IconLI>
          </IconUL>

          <div className="">Workflow</div>
          <ULVert>
            <li>
              <FontAwesomeIcon icon={["fas", "check"]} />
              Mobile-First, Responsive Design
            </li>
            <li>
              <FontAwesomeIcon icon={["fas", "check"]} />
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <FontAwesomeIcon icon={["fas", "check"]} />
              Cross Functional Teams
            </li>
            <li>
              <FontAwesomeIcon icon={["fas", "check"]} />
              Agile Development &amp; Scrum
            </li>
          </ULVert>
        </div>
        <div className="">
          QA Analyst
          <ul className="">
            <li>
              <i className="fa-li fa fa-check" />
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default SkillsComponent;
