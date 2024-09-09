import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Footer,
  Navbar,
  About,
  Hero,
  Skills,
  Projects,
  Contact,
  Loader,
} from "../index";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <div
            className={`transition-opacity duration-500 ease-in ${
              isLoading
                ? " opacity-0 pointer-events-none "
                : "opacity-100 pointer-events-auto"
            }  xl:pt-[5.5rem] lg:pt-[4.5rem] min-[860px]:pt-[4.5rem] md:pt-[3.5rem] sm:pt-[3rem] pt-[2.7rem]`}
          >
            <main className="relative xl:px-[6.5rem] xl:py-4 md:px-[4rem] md:py-3 sm:px-[2.7rem] px-[2.25rem] py-2">
              <Navbar />
              <div className="w-full flex flex-col items-center xl:gap-[7rem] lg:gap-[6rem] md:gap-[5rem] sm:gap-[3rem] gap-[2rem]">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </div>
              <Footer />
            </main>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Layout;
