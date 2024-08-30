import logo from "/portfolio_logo.svg";

type NavLink = {
  name: string;
  label: string;
};

function Navbar() {
  const navItems: Array<NavLink> = [
    { name: "home", label: "home" },
    { name: "about", label: "about" },
    { name: "skills", label: "skills" },
    { name: "projects", label: "projects" },
    { name: "contact", label: "contact" },
  ];
  return (
    <header className="flex items-center justify-between bg-dark xl:px-[6.5rem] xl:py-4 md:px-[3.75rem] md:py-3 px-5 py-2">
      <div className="">
        <img src={logo} alt="harry" className="w-full object-cover" />
      </div>
      <nav>
        <ul className="flex lg:items-center xl:gap-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="font-JetMono font-medium text-white/60 capitalize xl:text-lg "
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
