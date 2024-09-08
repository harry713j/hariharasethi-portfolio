import { Meteors } from "../../meteor";
import { ProjectCardProps } from "../../../Projects/Projects";

function ProjectCard({
  projectTitle,
  description,
  projectImage,
  githubLink,
  url,
}: ProjectCardProps) {
  return (
    <div className="bg-[#111827] w-full h-full shadow-md rounded-xl group/card transition duration-300 ease-in hover:drop-shadow-card ">
      <div className="w-full h-[45%] ">
        <div
          className={`overflow-hidden relative rounded-t-lg card h-full shadow-xl  w-full mx-auto backgroundImage flex flex-col justify-between p-4 object-cover`}
          style={{
            backgroundImage: `url(${projectImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50"></div>
        </div>
      </div>
      <div className="relative overflow-hidden h-[55%] flex flex-col justify-between xl:px-3 xl:py-4 lg:py-3.5 lg:px-2.5 md:py-3 md:px-2.5 sm:px-3 sm:py-4 px-2.5 py-3.5 ">
        <div className="flex flex-col h-[70%] items-start justify-between lg:py-1.5 lg:gap-2 md:py-1 md:gap-1.5 sm:py-1.5 sm:gap-2 py-1 gap-2 ">
          <h3 className="font-JetMono transition duration-300 ease-in font-bold text-transparent bg-gradient-to-t from-pink-200 to-white/80 bg-clip-text capitalize group-hover/card:bg-gradient-to-t group-hover/card:from-highlight group-hover/card:to-white  xl:text-lg lg:text-[17px] md:text-base sm:text-[17px] text-base ">
            {projectTitle}
          </h3>
          <p className="select-none font-JetMono font-light transition-colors duration-500 ease-linear text-white/30 group-hover/card:text-[#CCC7AC] xl:text-xs lg:text-[11px] md:text-[10px] sm:text-[11px] text-[10px]">
            {description}
          </p>
        </div>
        <div className="flex items-center xl:gap-5 lg:gap-4 md:gap-3.5 sm:gap-5 gap-5 mt-5">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center lg:px-3 lg:py-1.5 md:px-2.5 md:py-[5px] sm:px-2.5 sm:py-1.5 px-2 py-1 overflow-hidden font-medium text-turquoise transition duration-300 ease-out border-[1.5px] border-turquoise rounded-full shadow group"
          >
            <span className="absolute inset-0 transition-transform flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-turquoise group-hover:translate-x-0 ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                id="github"
              >
                <path
                  fill="#EEF7FF"
                  fillRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="absolute font-JetMono lg:text-sm md:text-[13px] sm:text-[13px] text-xs capitalize flex items-center justify-center w-full h-full text-turquoise transition-all duration-300 transform group-hover:translate-x-full ease-in">
              Get code
            </span>
            <span className="relative invisible capitalize">Get code</span>
          </a>
          <button
            onClick={() => window.open(url, "_blank", "noopener noreferrer")}
            className={`relative inline-flex items-center justify-start lg:px-3 lg:py-1.5 md:px-2.5 md:py-[5px] sm:px-2.5 sm:py-1.5 px-2 py-1 overflow-hidden font-medium transition-all rounded-full group ${
              url ? "bg-white hover:bg-white" : " bg-white/70 "
            } `}
            disabled={url ? false : true}
          >
            {url && (
              <span className="w-48 h-48 rounded-full rotate-[-40deg] bg-electron absolute bottom-0 left-0 -translate-x-full ease-in-out duration-500 transition-transform translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            )}

            <span
              className={`${
                url
                  ? "relative text-electron transition-colors duration-300 ease-in-out group-hover:text-white/90 "
                  : "text-gray-500"
              }  capitalize font-JetMono font-semibold w-full text-left lg:text-base md:text-sm sm:text-[15px] text-sm `}
            >
              preview
            </span>
          </button>
        </div>

        <Meteors className="" number={30} />
      </div>
    </div>
  );
}

export default ProjectCard;
