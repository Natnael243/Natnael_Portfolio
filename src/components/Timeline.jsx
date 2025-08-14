import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSchool, faStar } from "@fortawesome/free-solid-svg-icons";

// Custom colors
const COLORS = {
  work: "#2563eb", // blue-600
  school: "#db2777", // pink-600
  star: "#10b981", // emerald-500
  cardBg: "#f8fafc", // slate-50
  cardText: "#1e293b", // slate-800
  border: "#e5e7eb", // gray-200
};

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: {
    background: COLORS.work,
    color: "#fff",
    boxShadow: "0 0 0 4px #bfdbfe",
  },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: {
    background: COLORS.school,
    color: "#fff",
    boxShadow: "0 0 0 4px #fbcfe8",
  },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: {
    background: COLORS.star,
    color: "#fff",
    boxShadow: "0 0 0 4px #6ee7b7",
  },
};

function Timeline() {
  const timeline = [
    {
      icon: workIcon,
      date: "Jun 2025 - Present",
      title: "Alarm Monitoring Specialist",
      subtitle: "Koppa Smart Security",
      desc: "Monitoring and managing alarm systems, ensuring prompt response to security breaches, and maintaining system integrity.",
    },{
      icon: workIcon,
      date: "Apr 2024 - May 2025",
      title: "Web Developer",
      subtitle: "Lebawi Net Trading PLC",
      desc: "Built different kinds of websites including company portfolio, blogs and admin panels. Implemented responsive designs and optimized performance.",
    },
    {
      icon: workIcon,
      date: "Dec 2023 - Mar 2024",
      title: "Financial IT Support",
      subtitle: "Purpuse Black Ethiopia",
      desc: "Check customers finished their payment for their goods, built Excel to check the transaction, approved item invoices to be delivered to customers.",
    },
    {
      icon: schoolIcon,
      date: "July 2017",
      title: "C++ Fundamental Programming",
      subtitle: "Certification, Virtual Computer Engineering Institute",
      desc: "Basic understanding of C++ programming language, including syntax, data types, control structures, and functions.",
    },
    {
      icon: schoolIcon,
      date: "August 2017",
      title: "Java Fundamental Programming",
      subtitle: "Certification, Virtual Computer Engineering Institute",
      desc: "Basic understanding of Java programming language, including syntax, data types, control structures, and functions.",
    },
    {
      icon: schoolIcon,
      date: "Oct 2019 - Apr 2023",
      title: "Bachelor of Science in Computer Science",
      subtitle: "BSc Degree, Microlink IT College",
      desc: "Graduated with a BSc in Computer Science from Microlink IT College, focusing on software development, algorithms, and data structures.",
    },
    {
      icon: starIcon,
    },
  ];

  return (
    <div className="w-full px-4 py-12 pb-0 bg-gradient-to-b from-indigo-700 via-purple-900 to-black">
      <div className="pb-12 mx-auto max-w-2xl lg:mx-auto">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          My Journey
        </h2>
        <p className="text-center mt-2 text-white/80">
          A timeline of my professional and educational experiences, showcasing my growth and achievements in the field of computer science.
        </p>
      </div>

      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle = {
            background: COLORS.cardBg,
            color: COLORS.cardText,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)",
            borderRadius: "1rem",
            border: `1px solid ${COLORS.border}`,
            padding: "2rem",
          };

          const arrowStyle = {
            borderRight: `7px solid ${COLORS.border}`,
          };

          return (
            <VerticalTimelineElement
              key={i}
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              dateClassName="font-bold text-lg text-white"
              {...t.icon}
              iconClassName="shadow-lg"
            >
              {t.title ? (
                <>
                  <h3 className="vertical-timeline-element-title text-xl font-bold mb-1">
                    {t.title}
                  </h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle text-base font-medium text-slate-500 mb-2">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p className="text-amber-800 text-base">{t.desc}</p>}
                </>
              ) : (
                <div className="flex items-center justify-center h-12">
                  <span className="text-emerald-500 font-bold text-lg">
                    Journey Continues!
                  </span>
                </div>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
