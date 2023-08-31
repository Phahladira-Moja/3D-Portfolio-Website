import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {" "}
            {title}{" "}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software engineer with a passion for learning and a broad range of
        experience in various programming languages and frameworks. I'm familiar
        with languages like C#/.NET, Golang, Java, JavaScript & TypeScript, and
        frameworks such as Flutter, React & React Native, Angular, and Ionic.
        Additionally, I've had the opportunity to work hands-on with Firebase
        and AWS services, and I'm proud to have earned my AWS Certified Cloud
        Practitioner certification. I also have a background that spans both SQL
        and NoSQL databases, which I believe showcases my adaptability in
        handling data.
        <br />
        <br />
        While I do possess technical skills, I'm equally dedicated to fostering
        collaborative relationships with clients. My goal is to provide
        down-to-earth, scalable solutions that address real-world challenges. By
        combining creative ideas with the latest technology, I've managed to
        create user-friendly solutions that emphasize efficiency and
        practicality. I'm excited to work together to give life to your concepts
        and explore new avenues of innovation. forward.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// NB: You can wrap the export with a wrapper
export default SectionWrapper(About, "about");
