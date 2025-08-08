import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

function App() {
  const timeline = [
    {
      icon: workIcon,
      date: "2023 - present",
      title: "Web Developer",
      subtitle: "Fulltime",
      desc: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      icon: workIcon,
      date: "2010 - 2011",
      title: "Art Director",
      subtitle: "San Francisco, CA",
      desc: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
      icon: workIcon,
      date: "2008 - 2010",
      title: "Web Designer",
      subtitle: "Los Angeles, CA",
      desc: "User Experience, Visual Design",
    },
    {
      icon: workIcon,
      date: "2006 - 2008",
      title: "Web Designer",
      subtitle: "San Francisco, CA",
      desc: "User Experience, Visual Design",
    },
    {
      icon: schoolIcon,
      date: "April 2013",
      title: "Content Marketing for Web, Mobile and Social Media",
      subtitle: "Online Course",
      desc: "Strategy, Social Media",
    },
    {
      icon: schoolIcon,
      date: "November 2012",
      title: "Agile Development Scrum Master",
      subtitle: "Certification",
      desc: "Creative Direction, User Experience, Visual Design",
    },
    {
      icon: schoolIcon,
      date: "2002 - 2006",
      title: "Bachelor of Science in Interactive Digital Media Visual Imaging",
      subtitle: "Bachelor Degree",
      desc: "Creative Direction, Visual Design",
    },
    { icon: starIcon },
  ];

  return (
    <div className="App">
      <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Timeline
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            A brief overview of my professional journey.
          </p>
        </div>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: "rgb(33, 150, 243)", color: "#fff" }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: "7px solid  rgb(33, 150, 243)" }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
