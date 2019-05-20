import React, { Component } from "react";
import Proptypes from "prop-types";

class ExperienceComponent extends Component {
  render() {
    return (
      <section
        className="ui raised very padded text container border"
        id="experience"
      >
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Quality Assurance Analyst </h3>
              <div className="subheading mb-3">
                Automation Testing -- Empiretoday{" "}
              </div>
              <p />
              <div className="subheading mb-3">Backup Lead -- Trov </div>
              <ul>
                <li>
                  Regression testing for Android, iOS, and ReactJS applications.
                </li>
                <li>Wrote and edited test cases and test case scenarios.</li>
                <li>
                  Collaborated with developers and designers to resolve front
                  end issues on company website.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2018 - Ongoing</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Contract Wordpress Developer</h3>
              <div className="subheading mb-3">
                AUSM.org, GalaxieChicago, Aspiritech
              </div>
              <ul>
                <li>Resolved front end design requests at an on-call basis.</li>
                <li>
                  Completed site migration and SSL certification and resolved
                  other backend issues.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2016 - Ongoing</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">BDO USA LLP Grand Rapids</div>
              <p />
              <ul>
                <li>
                  {" "}
                  Developed map application using open street map API on a
                  Sharepoint framework.
                </li>
                <li>
                  Create Excel and Word macros using VBA for office management.{" "}
                </li>
                <li>
                  Queried and logged references of outdated databases to improve
                  production planning.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2016 - May 2016</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ExperienceComponent;
