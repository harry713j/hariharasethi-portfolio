import { useEffect, useState } from "react";
import logo from "/portfolio_logo.svg";

type NavLink = {
  name: string;
  label: string;
  href: string;
};

function Navbar() {
  const navItems: Array<NavLink> = [
    { name: "home", label: "home", href: "#home" },
    { name: "about", label: "about", href: "#about" },
    { name: "skills", label: "skills", href: "#skills" },
    { name: "projects", label: "projects", href: "#projects" },
    { name: "contact", label: "contact", href: "#contact" },
  ];

  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const [currentActive, setCurrentActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setCurrentActive(currentSection);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed w-[90%] xl:top-4 md:top-3 top-2 left-1/2 -translate-x-1/2">
      <div className="relative flex items-center justify-between rounded-sm shadow bg-dark_grey xl:px-[2rem] xl:py-3 md:px-[1.5rem] md:py-2 px-4 py-1.5">
        {/* TODO: Fix the logo for smaller screen below 480px */}
        <div className="flex items-center">
          <img src={logo} alt="harry" className="w-full object-cover" />
        </div>
        <nav className="flex items-center">
          <ul className="opacity-0 invisible transition-opacity ease-in-out flex min-[900px]:opacity-100 min-[900px]:visible min-[900px]:items-center xl:gap-8 lg:gap-6 min-[900px]:gap-5">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`font-JetMono font-medium capitalize cursor-pointer xl:text-lg lg:text-base min-[900px]:text-[15px] transition-colors
               hover:text-white ${
                 currentActive === item.name
                   ? "text-white/100"
                   : "text-white/60 "
               }
              `}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <section
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            className={`min-[900px]:opacity-0 min-[900px]:invisible transition-opacity ease-in-out cursor-pointer active:bg-[#40444a] hover:outline hover:outline-[0.5px] hover:outline-white/50 ${
              isNavMenuOpen ? "outline outline-[0.5px] outline-white/50" : ""
            } px-2 py-2.5 rounded-xl`}
          >
            <div
              className={`z-10 flex flex-col items-center gap-2 ${
                isNavMenuOpen ? "justify-center" : ""
              } `}
            >
              <span
                className={`w-[1.875rem] h-[2px] bg-teal rounded transition-transform ease-in ${
                  isNavMenuOpen ? "rotate-45 translate-y-[9.6px]" : ""
                }`}
              ></span>
              <span
                className={`w-[1.875rem] h-[2px] bg-teal rounded transition-opacity opacity-100 visible ${
                  isNavMenuOpen ? "opacity-0 invisible w-0 h-0" : ""
                } `}
              ></span>
              <span
                className={`w-[1.875rem] h-[2px] bg-teal rounded transition-transform ease-in ${
                  isNavMenuOpen ? "-rotate-45 -translate-y-[9.6px]" : ""
                }`}
              ></span>
            </div>
          </section>

          <ul
            className={`absolute md:px-8 md:py-2 sm:px-6 px-4 py-1 bg-dark_grey top-full left-0 w-full transition-all flex flex-col min-[900px]:opacity-0 min-[900px]:invisible items-center justify-center rounded-b delay-100 duration-500 ease-in-out ${
              isNavMenuOpen
                ? "-translate-y-0 opacity-100 visible"
                : "-translate-y-16 opacity-0 invisible "
            }`}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`font-JetMono font-medium capitalize text-base  transition-colors py-2.5 flex items-center w-full
                ${currentActive === item.name ? "text-white" : "text-white/60 "}
              `}
              >
                <a
                  href={item.href}
                  onClick={() => setIsNavMenuOpen(false)}
                  className="cursor-pointer hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
