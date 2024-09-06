import { Footer, Navbar, About, Hero, Skills, Projects } from "../index";

function Layout() {
  return (
    <div className="xl:pt-[3.75rem] md:pt-[2.75rem] pt-[2.5rem]">
      <main className="relative xl:px-[6.5rem] xl:py-4 md:px-[4rem] md:py-3 sm:px-[2.7rem] px-[2.25rem] py-2">
        <Navbar />
        <div className="w-full flex flex-col items-center xl:gap-[7rem] lg:gap-[6rem] md:gap-[5rem] sm:gap-[3rem] gap-[2rem]">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <section id="contact" className="mb-8 text-white">
            To show an active state for the navbar link corresponding to the
            currently visible section, you can implement scroll event handling
            in React. When the user scrolls through the page, we'll detect which
            section is in view and apply an "active" class to the corresponding
            navbar link.
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
