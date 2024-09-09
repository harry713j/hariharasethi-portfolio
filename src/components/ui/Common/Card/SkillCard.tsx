import { BackgroundGradient } from "../../background-gradient";
import { motion } from "framer-motion";

function SkillCard({ src, name }: { src: string; name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className="w-full h-full flex justify-center"
    >
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
    </motion.div>
  );
}

export default SkillCard;
