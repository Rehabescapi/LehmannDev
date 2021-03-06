import React, { Component } from "react";

import { PageTransitionWrapper } from "../variants";

class EducationComponent extends Component {
  render() {
    return (
      <PageTransitionWrapper>
        <section
          className="ui raised very padded text container border"
          id="education"
        >
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
                <span className="text-primary">
                  August 2012 - December 2016
                </span>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-content mr-auto">
                <h3>Certifications</h3>

                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    WCAG Trusted Tester Certifications
                  </span>
                  DHS Section 508 Accessibility Trusted Tester — November 2019.
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    ISTQB Agile Tester certification — February 2019.
                  </span>
                </div>

                <div className="resume-date text-md-right">
                  Tyler Mcginnis React/Redux courseworks.
                </div>
                <div className="resume-date text-md-right">
                  Kent C Dodds Testing Track.
                </div>
              </div>
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
        </section>
      </PageTransitionWrapper>
    );
  }
}
export default EducationComponent;
