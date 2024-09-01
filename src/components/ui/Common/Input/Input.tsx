type InputProps = {
  type?: string;
  className?: string;
  placeholder: string;
  value: string;
  onChangeValue: React.Dispatch<React.SetStateAction<string>>;
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
      className={`${className} w-full lg:h-10 lg:p-4 lg:text-base md:h-9 md:p-3.5 md:text-[15px] sm:h-8 sm:p-3 h-7 p-2.5 text-sm lg:placeholder:text-base md:placeholder:text-[15px] sm:placeholder:text-sm placeholder:text-xs placeholder:capitalize placeholder:text-white/40 text-white/90 caret-turquoise rounded-md outline-none bg-grey shadow-sm font-JetMono border-[0.5px] border-transparent focus:border-turquoise `}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
    />
  );
}

export default Input;
