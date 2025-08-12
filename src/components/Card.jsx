const Card = ({ title,image, description, github, live }) => {
  return (
    <div className="w-[350px] p-3 bg-[#1E293B] border border-[#27344a] rounded-lg space-y-4 flex flex-col">
      {/* Project Image */}
      <div className="flex justify-center mb-4">
        {/* Replace with your image source or prop if available */}
        <img
          src={image}
          alt={`${title} project`}
          className="w-120 h-50 object-cover rounded-md"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Project Icons */}
          <div className="w-7">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g strokeWidth={0} id="SVGRepo_bgCarrier"></g>
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>file_type_html</title>
                <polygon
                  style={{ fill: "#e44f26" }}
                  points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201"
                />
                <polygon
                  style={{ fill: "#f1662a" }}
                  points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858"
                />
                <polygon
                  style={{ fill: "#ebebeb" }}
                  points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407"
                />
                <polygon
                  style={{ fill: "#ebebeb" }}
                  points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434"
                />
                <polygon
                  style={{ fill: "#fff" }}
                  points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407"
                />
                <polygon
                  style={{ fill: "#fff" }}
                  points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151"
                />
              </g>
            </svg>
          </div>
          <span className="text-white font-bold text-xl">+</span>
          <div className="w-7">
            <svg
              fill="#000000"
              preserveAspectRatio="xMidYMid"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 -51 256 256"
            >
              <g strokeWidth={0} id="SVGRepo_bgCarrier"></g>
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <linearGradient
                    id="linearGradient-1"
                    y2="67.5555556%"
                    x2="100%"
                    y1="32%"
                    x1="-2.77777778%"
                  >
                    <stop offset="0%" stopColor="#2298BD"></stop>
                    <stop offset="100%" stopColor="#0ED7B5"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <path
                    fill="url(#linearGradient-1)"
                    d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* Title and Description */}
      <div className="mb-2">
        <h2 className="text-white font-bold text-xl">{title}</h2>
        <p className="text-zinc-300 text-sm">{description}</p>
      </div>
      <div className="flex items-center gap-5">
        {/* GitHub Icon Button */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 fill-slate-400 hover:fill-sky-400 duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>github</title>
            <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.091-.646.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 5.845c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>
        {/* Live Icon Button */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 fill-slate-400 hover:fill-sky-400 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Netlify icon</title>
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14a6 6 0 100 12 6 6 0 000-12z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
