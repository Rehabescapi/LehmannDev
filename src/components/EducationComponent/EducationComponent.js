import React, { Component } from "react";
import Proptypes from "prop-types";

class EducationComponent extends Component {
  render() {
    return (
      <section className="resume-section" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Grand Valley State University</h3>
              <div className="subheading">Bachelor of Science</div>
              <div>Major Computer Science</div>
              <p>Minor Philosophy</p>
            </div>
            <div className="resume-date">
              <span className="text-primary">August 2012 - December 2016</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-content mr-auto">
              <h3>Tribecca Flashpoint Media Arts Academy</h3>
              <div className="subheading">Forcus in Game Design</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2009 - May 2011</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EducationComponent;
