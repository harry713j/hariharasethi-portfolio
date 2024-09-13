type InputProps = {
  type?: string;
  className?: string;
  placeholder: string;
  value: string;
  onChangeValue: (value: string) => void;
};

function Input({
  type = "text",
  className,
  placeholder,
  value,
  onChangeValue,
}: InputProps) {
  return (
    <input
      type={type}
      className={`${className} w-full lg:h-10 lg:px-4 lg:py-5 lg:text-base md:h-9 md:px-3.5 md:py-[18px] md:text-[15px] sm:h-8 sm:px-3 sm:py-4 h-7 px-2.5 py-3.5 text-sm lg:placeholder:text-base md:placeholder:text-[15px] sm:placeholder:text-sm placeholder:text-xs placeholder:capitalize placeholder:text-white/40 text-white/90 caret-turquoise rounded-md outline-none bg-grey shadow-sm font-JetMono border-[0.5px] border-transparent transition duration-300 ease-in focus:border-turquoise `}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChangeValue(e.target.value)
      }
    />
  );
}

export default Input;
