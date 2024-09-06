import { BackgroundGradient } from "../../background-gradient";

function SkillCard({ src, name }: { src: string; name: string }) {
  return (
    <BackgroundGradient className="flex justify-center items-center w-full h-full bg-dark rounded-xl p-2.5 overflow-hidden">
      <span className="w-full">
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
