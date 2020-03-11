import React, { Component } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageTransitionWrapper } from "../variants";
import { IconTypes } from "./IconTypes.js";
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
  }
`;

class SkillsComponent extends Component {
  render() {
    return (
      <PageTransitionWrapper>
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
              {IconTypes.map(Icon => (
                <IconLI>
                  <FontAwesomeIcon icon={["fab", Icon.key]} size="3x" />
                </IconLI>
              ))}
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
      </PageTransitionWrapper>
    );
  }
}
export default SkillsComponent;
