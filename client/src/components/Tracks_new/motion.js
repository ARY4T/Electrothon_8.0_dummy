import { motion } from "framer-motion";
import Image from "next/image";

const ExploreCard = ({ id, heading, img1, content, index, active, handleClick }) => (
  <motion.div
    layout
    custom={index}
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      layout: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
      opacity: { duration: 0.6, delay: index * 0.1 },
      y: { duration: 0.6, ease: "easeOut" },
    }}
    className={`relative overflow-hidden ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[150px] h-[700px] lg:h-[400px] cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={img1}
      alt="theme"
      className="absolute w-full h-full object-cover rounded-[24px] transition-transform duration-700 ease-out"
      style={{ transform: active === id ? "scale(1.02)" : "scale(1)" }}
    />

{active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-gray-100 absolute z-0 lg:bottom-10 text-center lg:origin-[0,0]">
        {heading}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-4 md:p-6 3xl:p-10 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] h-full">
        <p className="font-normal text-sm md:text-base 3xl:text-xl leading-[20.16px] text-white">
          {content}
        </p>
        <h2 className="mt-4 font-semibold text-lg md:text-2xl text-white absolute bottom-10">
          {heading}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
