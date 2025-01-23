import React from "react";
import "./Techstack.css";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import RubberBand from "react-reveal/RubberBand";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";


const TechstackList = [
  { _id: 1, name: "HTML", icon: FaHtml5 },
  { _id: 2, name: "CSS", icon: FaCss3 },
  { _id: 3, name: "JavaScript", icon: TbBrandJavascript },
  { _id: 4, name: "React", icon: FaReact },
  { _id: 5, name: "Node.js", icon: FaNodeJs },
  { _id: 6, name: "Express", icon: SiExpress },
  { _id: 7, name: "MongoDB", icon: SiMongodb },
  { _id: 8, name: "GitHub", icon: FaGithub },
  { _id: 9, name: "Bootstrap", icon: FaBootstrap },
  { _id: 10, name: "Tailwind", icon: SiTailwindcss },
  { _id: 11, name: "Next.Js", icon: TbBrandNextjs }, 
];

const Techstack = () => {
  return (
    <>
      <div className=" techstack" id="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </RubberBand>
        <div className="row">
          {TechstackList.map((tech) => (
            
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
