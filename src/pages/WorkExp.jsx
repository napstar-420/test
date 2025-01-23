import React from "react";
import { SiReact } from "react-icons/si";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <div className="col-12 mt-3 mb-1 head">
            Courses & Experience
          </div>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
             
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                PNY Trainings Institute Lahore
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading. <br />
                <u> With Six Months Experience in PNY Trainings Institute Lhr.</u>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
          
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<BiLogoMicrosoftTeams />}
            >
              <h3 className="vertical-timeline-element-title">
                Advance Office Management
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Lunar Computer College Lahore.
              </h4>
              <p>
                MS.Word, MS,Excel, Power Point, Communication, File Management, Administrative Skills, Data Entry and Accuracy.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
