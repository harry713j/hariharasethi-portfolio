import { BackgroundGradient } from "../../background-gradient";

function SkillCard({ src, name }: { src: string; name: string }) {
  return (
    <BackgroundGradient
      className="flex justify-center items-center w-full h-full bg-dark rounded-lg p-2.5 overflow-hidden"
      containerClassName="w-full h-full"
    >
      <span className="w-[80%]">
        <img
          src={src}
          alt={name}
          title={name}
          className="w-full object-cover"
        />
      </span>
    </BackgroundGradient>
  );
}

export default SkillCard;
