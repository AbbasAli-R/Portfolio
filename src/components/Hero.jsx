import { HERO } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  const name = HERO.name;

  // Variants for the typing effect
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: "0%" },
  };

  return (
    <section className="flex max-w-4xl flex-col gap-10 pt-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <p className="p-2 text-3xl text-gray-400 tracking-tighter lg:text-4xl">{HERO.greet}</p>
        <h2 className="mt-1 mb-4 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          <span className="text-base md:text-2xl lg:text-5xl text-gray-400">I'm </span>
          <motion.span
            className="inline-block"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char} 
              </motion.span>
            ))}
          </motion.span>
        </h2>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
