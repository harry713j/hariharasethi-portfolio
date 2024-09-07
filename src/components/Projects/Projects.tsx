import { ProjectCard } from "../ui";

export type ProjectCardProps = {
  projectTitle: string;
  description: string;
  projectImage: string;
  url?: string;
  githubLink: string;
};
const projects: ProjectCardProps[] = [
  {
    projectTitle: "Resume lite",
    description:
      "Resume Lite is a user friendly online resume builder developed with React. It offers a seamless experience for crafting professional resumes effortlessly. With intuitive interface and dynamic routing, users can easily navigate between sections like personal details, education, work experience, and more. ",
    projectImage: "https://i.imgur.com/G5Mf1dA.png",
    url: "https://resume-builder-lite.vercel.app/",
    githubLink: "https://github.com/harry713j/resume_builder_lite",
  },
  {
    projectTitle: "Little lemon",
    description:
      "Little Lemon is a fictional restaurant based in Chicago, represented through a React application. This project features a dynamic menu, a reservation system, online ordering capabilities, and more. It provides a comprehensive view of the restaurant's offerings and functionalities, creating an engaging experience for users exploring the Little Lemon dining experience.",
    projectImage: "https://i.imgur.com/lE6trMt.jpg",
    url: "",
    githubLink: "https://github.com/harry713j/little-lemon",
  },
  {
    projectTitle: "Music course",
    description:
      "This Next.js concept app, using Aceternity UI, features advanced animations like smooth transitions, fluid motion effects, and dynamic loading. Each animation enhances user interaction and navigation, creating a visually engaging and intuitive digital experience that elevates UI design.",
    projectImage: "https://i.imgur.com/xRiZ7WP.png",
    url: "https://musiccourse.vercel.app/",
    githubLink: "https://github.com/harry713j/music-course-app-nextJS",
  },
  {
    projectTitle: "auth with nextJS",
    description:
      "This Next.js app is dedicated to mastering authentication, token management, and cookie handling. It implements secure user authentication flows, including token-based authorization and session management with cookies. The app demonstrates best practices for protecting sensitive data, ensuring secure user sessions, and managing user state efficiently. ",
    projectImage: "https://i.imgur.com/TK66hlj.png",
    url: "",
    githubLink: "https://github.com/harry713j/auth-with-nextJS",
  },
];

function Projects() {
  return (
    <section id="projects" className="w-[96%] flex justify-center">
      <div className="w-full flex flex-col items-center xl:gap-12 lg:gap-10 md-gap-8 sm-gap-7 gap-5">
        <h2 className="font-JetMono font-bold text-turquoise xl:text-[28px] lg:text-[26px] md:text-2xl sm:text-xl text-lg">
          Projects
        </h2>
        <div className="flex min-[816px]:flex-row flex-col flex-wrap justify-center xl:gap-10 lg:gap-9 min-[816px]:gap-5 min-[827px]:gap-8 md:gap-8 sm:gap-7 gap-6 ">
          {projects.map((project) => (
            <span
              key={project.projectTitle}
              className="inline-block xl:h-[30rem] xl:w-[25rem] lg:h-[29rem] lg:w-[22.5rem] min-[816px]:h-[26rem] min-[816px]:w-[20rem] md:h-[25rem] md:w-[29rem] sm:h-[27rem] sm:w-[27rem] h-[26rem] w-[24rem] min-[320px]:h-[28rem] min-[320px]:w-[19rem] "
            >
              <ProjectCard
                projectTitle={project.projectTitle}
                description={project.description}
                projectImage={project.projectImage}
                githubLink={project.githubLink}
                url={project.url}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
