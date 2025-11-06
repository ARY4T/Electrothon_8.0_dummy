"use client"; // Ensure this is a client component

import React from "react";
import { motion } from "framer-motion";
import { Pirata_One } from "next/font/google";
import Cannonball from "./Cannonball";
import Cannonball4 from "./Cannonball4";
import Cannonball3 from "./Cannonball3";
import Cannonball2 from "./Cannonball2";

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } },
};

const fadeInDelayed = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } },
};

// **Cannonballs Animation - Move from Left to Right**
const cannonballAnimation = {
  hidden: { x: "-10vw", opacity: 0 }, // Start closer to avoid overflow issues
  show: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.3, // Staggered effect
      ease: "easeOut",
    },
  }),
};

const AboutUs = () => {
  return (
    <motion.div
      id="about"
      className="relative w-full overflow-hidden max-w-[100vw] sm:-mt-20 -mt-16" // Prevent overflow
      initial="hidden"
      animate="show"
    >
      {/* Page Content Wrapper */}
      <motion.div className="relative flex flex-col items-center w-full max-w-[100vw] overflow-hidden">
        {/* Title */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center w-full mb-5"
        >
          <h2
            className={`${pirataOne.className} text-[40px] sm:text-[70px] md:text-[100px] lg:text-[5.5rem] text-center text-white mb-0`}
            style={{ fontFamily: "Pirata One, sans-serif", textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5) " }}
          >
            About Us
          </h2>
        </motion.div>

        {/* Background Rectangle */}
        <motion.div
          variants={fadeInScale}
          className="relative w-full max-w-[90vw] sm:max-w-[70vw] bg-[#03294F] opacity-80 rounded-[30px] sm:rounded-[50px] z-0 p-[4vh] mx-auto border"
        >
          <motion.div
            variants={fadeInDelayed}
            className="relative z-10 w-full flex items-center justify-center"
          >
            <p className="font-humanistika text-base md:text-xl lg:text-[28px] lg:leading-[36px] font-normal text-white leading-[1.3] text-center md:text-left">
            Welcome to Electrothon 8.0, where the world of hackathons gets a retro revival!
            This year, we’re leveling up into the Arcade of Innovation — a vibrant arena where creativity, skill, and technology collide.From pixelated dreams to futuristic visions, every project is a new high score waiting to be achieved.

              <br />
              <br />
              Organized by SPEC, the dynamic technical community of NIT Hamirpur, Electrothon continues its legacy as one of North India’s most iconic hackathons, empowering thousands of students to play, build, and innovate without limits.

              <br />
              <br />
              In our previous editions, we’ve witnessed brilliant minds turn ideas into reality i.e. crafting solutions that redefined possibilities. Now, in this Arcade Edition, get ready to power up your imagination, unlock new challenges, and press “Start” on a journey that celebrates the joy of coding and the thrill of creation.

            </p>
          </motion.div>
        </motion.div>

        {/* Cannonballs Moving from Left to Right */}
        <div className="flex justify-center items-center space-x-5 pt-5 w-full h-auto overflow-hidden">
          <motion.div
            custom={0}
            variants={cannonballAnimation}
            initial="hidden"
            whileInView="show"
          >
            <Cannonball4 />
          </motion.div>
          <motion.div
            custom={1}
            variants={cannonballAnimation}
            initial="hidden"
            whileInView="show"
          >
            <Cannonball3 />
          </motion.div>
          <motion.div
            custom={2}
            variants={cannonballAnimation}
            initial="hidden"
            whileInView="show"
          >
            <Cannonball />
          </motion.div>
          <motion.div
            custom={3}
            variants={cannonballAnimation}
            initial="hidden"
            whileInView="show"
          >
            <Cannonball2 />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
