import React from "react";

const skills = [
  { name: "HTML", level: 90, color: "bg-yellow-500" },
  { name: "Tailwind", level: 85, color: "bg-pink-500" },
  { name: "MySQL", level: 85, color: "bg-blue-500" },
  { name: "Javascript", level: 80, color: "bg-yellow-500" },
  { name: "React", level: 45, color: "bg-pink-500" },
  { name: "PHP", level: 80, color: "bg-blue-500" },
];

const Card = () => {
  return (
    <div className="max-w-md w-full bg-gray-800 rounded-lg p-6 mx-auto mt-10">
      {skills.map((skill, index) => (
        <div key={index} className="mb-6">
          <span className="block text-gray-200 font-semibold text-sm mb-1">
            {skill.name}
          </span>
          <div className="w-full h-2 rounded-full bg-gray-700 relative overflow-hidden">
            <div
              className={`${skill.color} h-2 rounded-full absolute left-0 top-0`}
              style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
            >
              <span className="absolute -top-6 right-0 text-xs font-bold text-black px-1 rounded bg-gray-200">
                {skill.level}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
