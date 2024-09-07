import React from "react";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = {
  gradient: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

function BorderGradientButton({ gradient, children, onClick }: ButtonProps) {
  return (
    <div
      className="w-full flex justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full lg:h-10 md:h-9 sm:h-8 h-7 group ">
        <div
          className={cn(
            "absolute -inset-0.5 rounded-md blur-[2px] group-hover:blur-[6px] opacity-50 transition duration-500 group-hover:duration-200 group-hover:opacity-60 will-change-filter overflow-hidden",
            gradient
          )}
        />
        <span className="relative inline-block w-full lg:h-10 md:h-9 sm:h-8 h-7 duration-500 group-hover:duration-200">
          <span
            className={cn(
              "flex items-center justify-center w-full h-full inset-0.5 rounded-md p-[1px]",
              gradient
            )}
          >
            <span className="flex capitalize items-center justify-center w-full h-full px-6 bg-turquoise/40 text-white font-JetMono font-bold lg:text-lg md:text-base sm:text-[15px] text-sm rounded-md">
              {children}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default BorderGradientButton;
