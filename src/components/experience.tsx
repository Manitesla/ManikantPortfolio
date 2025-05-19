import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>

        <div className="my-20 flex flex-col gap-0">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};


// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    position="right"
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      width: "100%",
      padding: "0",
    }}
    contentArrowStyle={{ display: "none" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="bg-[#1d1836] p-6 rounded-lg shadow-lg w-full flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={`experience-point-${i}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Use the sideImage from experience */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={experience.sideImage ?? "https://via.placeholder.com/300x200"}
          alt={`${experience.title} Visual`}
          className="w-full max-w-[300px] h-auto rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  </VerticalTimelineElement>
);



// Experience
