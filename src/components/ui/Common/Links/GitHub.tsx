import { SocialLinkProps } from "./LeetCode";

function GitHub({
  className,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}: SocialLinkProps) {
  return (
    <div
      className={`${className} group lg:w-14 md:w-12 sm:w-[44px] w-10 rounded-lg bg-inherit cursor-pointer shadow-neu-morphic flex items-center justify-center p-2 transition-shadow`}
    >
      <a href={href} target={target} rel={rel} className="inline-block w-full">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="none"
          className="transition-colors duration-300 fill-[rgba(238,247,255,0.6)] group-hover:fill-[#EEF7FF]"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <title>github</title> <rect width="24" height="24" fill="none" />
            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
          </g>
        </svg>
      </a>
    </div>
  );
}

export default GitHub;
