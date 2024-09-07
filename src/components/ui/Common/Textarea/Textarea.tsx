type TextareaProps = {
  className?: string;
  placeholder: string;
  value: string;
  onChangeValue: (value: string) => void;
};

function Textarea({
  className,
  placeholder,
  value,
  onChangeValue,
}: TextareaProps) {
  return (
    <textarea
      className={`${className} w-full lg:h-32 lg:p-4 lg:text-base md:h-28 md:p-3.5 md:text-[15px] sm:h-24 sm:p-3 h-20 p-2.5  sm:text-sm text-xs lg:placeholder:text-base md:placeholder:text-[15px] sm:placeholder:text-sm placeholder:text-xs placeholder:text-white/40 placeholder:capitalize text-white/90 caret-turquoise rounded-md outline-none bg-grey shadow-sm font-JetMono border-[0.5px] border-transparent transition duration-300 ease-in focus:border-turquoise resize-none`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
    ></textarea>
  );
}

export default Textarea;
