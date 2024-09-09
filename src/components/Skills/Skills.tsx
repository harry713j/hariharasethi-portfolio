import React from "react";
import { SkillCard } from "../ui";

type SkillProps = {
  href: string;
  src: string;
  name: string;
};

function Skills() {
  const skills = React.useMemo(
    (): SkillProps[] => [
      {
        name: "HTML",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        src: "/skills/html-5-svgrepo-com.svg",
      },
      {
        name: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        src: "/skills/css3-svgrepo-com.svg",
      },
      {
        name: "Javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        src: "/skills/javascript-svgrepo-com.svg",
      },
      {
        name: "NodeJS",
        href: "https://nodejs.org/en",
        src: "/skills/nodejs-icon-logo-svgrepo-com.svg",
      },
      {
        name: "ReactJS",
        href: "https://react.dev/",
        src: "/skills/react-svgrepo-com.svg",
      },
      {
        name: "NextJS",
        href: "https://nextjs.org/",
        src: "/skills/nextjs-svgrepo-com.svg",
      },
      {
        name: "Typescript",
        href: "https://www.typescriptlang.org/",
        src: "/skills/typescript-official-svgrepo-com.svg",
      },
      {
        name: "ExpressJS",
        src: "/skills/express-svgrepo-com.svg",
        href: "https://expressjs.com/",
      },
      {
        name: "MongoDB",
        href: "https://www.mongodb.com/",
        src: "/skills/mongo-svgrepo-com.svg",
      },
      {
        name: "Redux",
        href: "https://redux-toolkit.js.org/",
        src: "/skills/redux-svgrepo-com.svg",
      },
      {
        name: "TailwindCSS",
        href: "https://tailwindcss.com/",
        src: "/skills/tailwind-svgrepo-com.svg",
      },
      {
        name: "Git",
        href: "https://git-scm.com/",
        src: "/skills/git-svgrepo-com.svg",
      },
      {
        name: "GitHub",
        href: "https://github.com/",
        src: "/skills/github-142-svgrepo-com.svg",
      },
      {
        name: "Saas",
        href: "https://sass-lang.com/",
        src: "/skills/sass-svgrepo-com.svg",
      },
      {
        name: "MUI",
        href: "https://mui.com/material-ui/getting-started/",
        src: "/skills/material-ui-svgrepo-com.svg",
      },
      {
        name: "Bootstrap",
        href: "https://getbootstrap.com/",
        src: "/skills/bootstrap-fill-svgrepo-com.svg",
      },
      {
        name: "Appwrite",
        href: "https://appwrite.io/",
        src: "/skills/appwrite.svg",
      },
      {
        name: "Firebase",
        href: "https://firebase.google.com/",
        src: "/skills/firebase-svgrepo-com.svg",
      },
      {
        name: "MySQL",
        href: "https://www.mysql.com/",
        src: "/skills/mysql-logo-svgrepo-com.svg",
      },
      {
        name: "Java",
        href: "https://www.java.com/en/",
        src: "/skills/java-svgrepo-com.svg",
      },
      {
        name: "Python",
        href: "https://www.python.org/",
        src: "/skills/python-svgrepo-com.svg",
      },
      {
        name: "Figma",
        href: "https://www.figma.com/",
        src: "/skills/figma-svgrepo-com.svg",
      },
    ],
    []
  );
  return (
    <section id="skills" className="w-[96%] flex justify-center bg-dark">
      <div className="w-full flex flex-col items-center xl:gap-10 lg:gap-9 md-gap-8 sm-gap-7 gap-5">
        <h2 className="font-JetMono font-bold text-turquoise xl:text-[28px] lg:text-[26px] md:text-2xl sm:text-xl text-lg">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center xl:gap-8 lg:gap-7 md:gap-6 sm:gap-5 gap-4 ">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.href}
              target="_blank"
              rel="noopner noreferrer"
              className="xl:w-[6.25rem] xl:h-[6.25rem] lg:w-[5.75rem] lg:h-[5.75rem] md:w-[5.25rem] md:h-[5.25rem] sm:w-[4.75rem] sm:h-[4.75rem] w-[4.25rem] h-[4.25rem] "
            >
              <SkillCard name={skill.name} src={skill.src} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
