import heart from "/heart-svgrepo-com.svg";

function Footer() {
  return (
    <footer className="flex justify-center items-center bg-dark border-t-[0.3px] border-[#4A4F57] xl:px-[6.5rem] xl:py-5 md:px-[3.75rem] md:py-4 px-5 py-3">
      <p className="font-JetMono font-thin xl:text-lg md:text-base text-sm min-[320px]:text-xs text-white flex justify-center items-center">
        <span>Made with&nbsp;</span>
        <span className="inline-block xl:w-8 sm:w-6 w-5">
          <img
            src={heart}
            alt="heart"
            title="heart"
            className="w-full object-cover"
          />
        </span>
        <span>&nbsp; by Harihara</span>
      </p>
    </footer>
  );
}

export default Footer;
