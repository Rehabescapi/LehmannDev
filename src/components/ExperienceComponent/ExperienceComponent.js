import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";
import { PageTransitionWrapper } from "../variants";
class ExperienceComponent extends Component {
  render() {
    return (
      <PageTransitionWrapper>
        <section id="experience">
          <div>
            <h2>Experience</h2>

            <div>
              <div>
                <h3>Quality Assurance Analyst </h3>
                <div>
                  <h4>QA Lead -- Trov </h4>
                  <span>January 2018 - Ongoing</span>
                </div>
                <ul>
                  <li>
                    Regression testing for mobile native and ReactJS web
                    applications.
                  </li>
                  <li>Wrote and edited test cases and test case scenarios.</li>
                  <li>
                    Provided Accessibility feedback for WCAG 2.1 Compatabilty
                    for web platform.
                  </li>
                  <li>Wrote Cypress automation tests for multiple</li>
                  <li>Assistated with JMeter Performance testing.</li>
                </ul>
              </div>

              <h4>QA Lead -- Basecamp </h4>
              <ul>
                <li>
                  Created Reqression suite for Android, iOS, and Web Email
                  applications.
                </li>
                <li>
                  Lead Bi-monthly client meetings and assisted Analysts in
                  general business conduct.
                </li>
                <li>
                  Trained Analysts in web fundamentals and developed the client
                  onboarding procedure for web clients.
                </li>
              </ul>
            </div>
            <div>
              <span>August 2019 - Ongoing</span>
            </div>
          </div>

          <div>
            <div>
              <h3>Contract Wordpress Developer</h3>
              <div>AUSM.org, GalaxieChicago, Aspiritech</div>
              <ul>
                <li>Resolved front end design requests at an on-call basis.</li>
                <li>
                  Completed site migration and SSL certification and resolved
                  other backend issues.
                </li>
              </ul>
            </div>
            <div>
              <span>July 2016 - Ongoing</span>
            </div>
          </div>

          <div>
            <div>
              <h3>Web Design Intern</h3>
              <div>BDO USA LLP Grand Rapids</div>
              <p />
              <ul>
                <li>
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
            <div>
              <span>January 2016 - May 2016</span>
            </div>
          </div>
        </section>
      </PageTransitionWrapper>
    );
  }
}
export default ExperienceComponent;
