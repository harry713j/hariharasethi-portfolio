import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className="w-full flex justify-center"
    >
      <section id="about" className="w-[96%] flex justify-center">
        <div className="w-full flex flex-col items-center xl:gap-8 lg:gap-7 md-gap-6 sm-gap-5 gap-4">
          <h2 className="font-JetMono font-bold text-turquoise xl:text-[28px] lg:text-[26px] md:text-2xl sm:text-xl text-lg">
            About Me
          </h2>
          <p className="select-none font-JetMono font-light text-white/70 xl:text-base xl:leading-[1.625rem] lg:text-[15px] lg:leading-[1.5rem] md:text-sm md:leading-[1.42rem] sm:text-[13px] sm:leading-[1.32rem] text-xs leading-[1.21rem] ">
            I&apos;m Harihara Sethi, a self-taught MERN stack developer,
            Front-end developer and Web designer with a passion for crafting web
            applications and solving complex problems. My journey began with a
            fascination for technology&apos;s transformative power, leading me
            to master MongoDB, Express.js, React, and Node.js. I thrive on
            creating innovative and user-friendly solutions, blending creativity
            with technical skills. My approach combines creativity with
            technical precision, ensuring that each project not only meets but
            exceeds expectations. Beyond coding, I&apos;m committed to
            continuous learning and staying updated with the latest industry
            trends. Whether I&apos;m working on a new feature or exploring
            innovative technologies, I&apos;m always eager to take on new
            challenges and collaborate with others who share my passion for
            technology. Thank you for visiting my portfolio. If you&apos;re
            interested in collaborating or just want to chat about tech, feel
            free to reach out. Let&apos;s create something exceptional together!
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
