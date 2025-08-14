import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Card = ({ title, image, description, github, live }) => {
  return (
    <div
      className="w-[350px] p-3 bg-[#1E293B] border border-[#27344a] rounded-lg flex flex-col h-full 
                 hover:shadow-lg hover:shadow-[#00C7B740] hover:scale-[1.02] transition-transform duration-300 ease-in-out"
    >
      {/* Project Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={`${title} project`}
          className="w-120 h-50 object-cover rounded-md"
        />
      </div>

      {/* Title and Description */}
      <div>
        <h2 className="text-white font-bold text-xl pb-1.5">{title}</h2>
        <p className="text-zinc-300 text-sm pb-1.5">{description}</p>
      </div>

      {/* Buttons - pushed to bottom */}
      <div className="flex items-center justify-center gap-2 mt-auto pt-4">
        {/* GitHub Button */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#24292f] 
               hover:bg-[#1b1f23] text-white text-sm font-medium shadow-sm
               transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaGithub className="w-4 h-4" />
          <span>GitHub</span>
        </a>

        {/* View Site Button */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#00C7B7] 
                 hover:bg-[#009e8f] text-white text-sm font-medium shadow-sm
                 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FiExternalLink className="w-4 h-4" />
            <span>View</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
