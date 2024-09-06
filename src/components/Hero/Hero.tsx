import { useEffect, useState, useMemo } from "react";
import { BackgroundBeams } from "../ui/background-beam";
import { TypewriterEffect } from "../ui/typewriter-effect";

import hero from "/main-illustration.svg";

function Hero() {
  const sentences = useMemo(
    () => [
      [
        {
          text: "MERN",
          className:
            "font-JetMono font-extrabold text-electron xl:text-4xl lg:text-[29px] sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "Stack",
          className:
            "font-JetMono font-extrabold text-electron xl:text-4xl lg:text-[29px] sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "Developer",
          className:
            "font-JetMono font-extrabold text-electron xl:text-4xl lg:text-[29px] sm:text-2xl text-xl min-[320px]:text-lg",
        },
      ],
      [
        {
          text: "Front",
          className:
            "font-JetMono font-extrabold text-rose-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "End",
          className:
            "font-JetMono font-extrabold text-rose-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "Developer",
          className:
            "font-JetMono font-extrabold text-rose-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
      ],
      [
        {
          text: "Back",
          className:
            "font-JetMono font-extrabold text-violet-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "End",
          className:
            "font-JetMono font-extrabold text-violet-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "Developer",
          className:
            "font-JetMono font-extrabold text-violet-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
      ],
      [
        {
          text: "Web",
          className:
            "font-JetMono font-extrabold text-pink-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "UI",
          className:
            "font-JetMono font-extrabold text-pink-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
        {
          text: "Designer",
          className:
            "font-JetMono font-extrabold text-pink-500 xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-lg",
        },
      ],
    ],
    []
  );
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [sentences]);

  const words = sentences[currentSentenceIndex];

  return (
    <section id="home" className="w-[100%] z-10 bg-transparent">
      <div className="w-full flex min-[860px]:flex-row min-[860px]:gap-0 gap-8 flex-col-reverse items-center justify-between">
        <div className="w-full absolute inset-0 h-[80vh]">
          <BackgroundBeams />
        </div>
        <div className="lg:w-1/2 min-[860px]:w-3/5 flex flex-col items-start xl:gap-5 md:gap-4 sm:gap-3 gap-2.5">
          <span className="flex flex-col justify-start xl:gap-3 sm:gap-2.5 gap-2">
            <h1 className="font-JetMono font-extrabold xl:text-4xl lg:text-3xl sm:text-2xl text-xl min-[320px]:text-[17px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 to-95%">
                Hi, I am&nbsp;
              </span>
              <span className="text-teal drop-shadow-text-shadow">
                Harihara Sethi
              </span>
            </h1>

            <TypewriterEffect
              key={currentSentenceIndex}
              words={words}
              className="text-left"
              cursorClassName="bg-turquoise"
            />
          </span>
          <span>
            <p className="font-JetMono text-white/80 xl:text-lg lg:text-[17px] md:text-base sm:text-[15px] text-sm min-[320px]:text-[13px]">
              Hello there! I'm Harihara Sethi, a self-taught MERN Stack
              Developer. I enjoy creating web applications and solving problems
              through code. Welcome to my portfolio!
            </p>
          </span>
        </div>
        <div className="lg:w-1/2 min-[860px]:w-2/5 w-4/5">
          <img src={hero} alt="hero-image" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
