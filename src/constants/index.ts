// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
   project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  logo,
} from "../assets";
import iit from "../assets/iit.jpg";
import drdo from "../assets/DRDO.jpg";
import virobot from "../assets/Virobot.jpg";
import ieee from "../assets/IEEE.jpg";
import construct from "../assets/company/iit.png";
// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Manitesla",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Robotics",
    icon: web,
  },
  {
    title: "Embedded system",
    icon: mobile,
  },
  {
    title: "Engineering Solution",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

export const EXPERIENCES = [
  {
    title: "DRDO",
    company_name:
      "Awarded Runner-up in DRDO Dare to Dream 3.0 by Indian Defence Minister Rajnath Singh",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "The DRDO Dare to Dream competition is an annual innovation contest initiated by the Defence Research and Development Organisation (DRDO)",
      "It encourages individuals and startups to develop cutting-edge solutions in defense technologies and technological advancement in India.",
      "Combines a UGV and lightweight UAV that operate independently or as a unified rescue robot.",
      "UAV provides aerial imaging while UGV uses LIDAR and cameras for detailed mapping and victim detection.",
      "UGV has a powerful manipulator arm for debris removal, structural support, and supply delivery.",
      "Designed to improve efficiency, safety, and speed in disaster search and rescue amid skilled personnel shortages.",
    ],
    sideImage: drdo, // <-- Add your real image path here
  },
  {
    title: "IIT Bombay/ Quest Global Ingenium / IEEE ",
    company_name: "Eyantra Fighting Covid 19 Hackathon by IIT Bombay(National Level Winner) ,IEEE Young Engineers Entrepreneurship Program(National Level Winner),Quest Global Ingenium (National level Runner)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "The e-Yantra Fighting COVID-19 Hackathon by IIT Bombay encouraged students to create innovative solutions addressing challenges of the COVID-19 pandemic.",
      "Quest Global Ingenium is a national competition for engineering students to showcase innovative projects, offering mentorship, exposure, and career opportunities through a multi-stage selection process.",
      "The IEEE Young Engineers Entrepreneurship Program (YEEP) is an initiative by the IEEE Bangalore Section aimed at fostering entrepreneurship among engineering students and recent graduates",
      "Problem Addressed: Frontline healthcare workers are at high risk of infection, especially during pandemics like COVID-19, leading to fear and shortage of staff.",
      "Proposed Solution: The project introduces Virobot – The Artificial Nurse, a medical assistant robot that minimizes human exposure by performing patient care tasks.",
      "Key Features: Virobot can deliver medicines, monitor patient health, and stream real-time data to doctors via smartphones using autonomous or remote control.",
      "Additional Capabilities: Equipped with UV sterilizer lights, FPV camera, Bluetooth speaker, and internet connectivity, it also facilitates telecommunication and sterilization.",
    ],
    sideImage: virobot,
  },
  {
    title: "IEEE BIT / Navyantram Competition(SVVV Indore)",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "The IEEE BIT Mini Project Competition by IEEE Student Branch, Bangalore Institute of Technology, encourages student innovation and practical engineering applications.",
      "IDEA/MODEL Competition is a national-level contest for innovative engineering ideas and models, while Navyantram (SVVV Indore) is a platform promoting creative engineering projects and hands-on learning.",
      "Frontline healthcare workers are at high risk of infection during pandemics, causing fear and hesitation to work.",
      "This Nurse is a mini prototype robot that can be controlled remotely or work autonomously to deliver medicines and monitor patients..",
      "It includes built-in UV sterilizer lights to disinfect hospital areas.",
    ],
    sideImage: ieee,
  },
   {
    title: "IIT Bombay E-Yantra ",
    company_name: "Tesla",
    icon: construct,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "e-Yantra is an IIT Bombay initiative that promotes project-based learning in robotics and embedded systems to solve real-world problems.",
      " The Construct-O-Bot theme aimed at developing robotic solutions for post-disaster reconstruction. Participants were required to design and program autonomous robots to identify and rebuild structures in simulated disaster-affected environments.",
      " The challenge focused on key robotics skills including line-following, path planning, object manipulation, and autonomous navigation.",
      "Competition Stages: eYRC is conducted in multiple stages—Stage 1 involves simulation-based tasks using tools like V-REP to model robot behavior virtually, while in Stage 2, selected teams receive hardware kits to implement their solutions in real-world scenarios.",
    ],
    sideImage: iit,
  },
  // ... similarly for other experiences
];

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;


// Projects
export const PROJECTS = [
  
  {
    name: "Virobot Nurse Assistant",
    description:
      "Smart nurse assistant for health monitoring, medicine delivery, UV sterilization, and remote communication with real-time data access.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "nodemcu",
        color: "green-text-gradient",
      },
      {
        name: "robotarm",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Manitesla/virobot-code",
    live_site_link: "https://www.mecs-press.org/ijwmt/ijwmt-v10-n6/IJWMT-V10-N6-3.pdf",
  },
  {
    name: "Internet Rescue Robots",
    description:
      "Hybrid rescue robot with drone and ground vehicle for search, mapping, victim detection, debris removal, and real-time remote monitoring.",
    tags: [
      {
        name: "nodemcu",
        color: "blue-text-gradient",
      },
      {
        name: "servo",
        color: "green-text-gradient",
      },
      {
        name: "robo tank",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Manitesla",
    live_site_link: "https://www.mecs-press.org/ijwmt/ijwmt-v11-n2/IJWMT-V11-N2-2.pdf",
  },
  {
    name: "Mini Virobot",
    description:
      "This prototype delivers medicines,monitor health,sterilizes hospital can be controlled via smartphone or autonomous navigation with real-time internet data streaming.",
    tags: [
      {
        name: "prototype",
        color: "blue-text-gradient",
      },
      {
        name: "nodemcu",
        color: "green-text-gradient",
      },
      {
        name: "robotarm",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Manitesla",
    live_site_link: "https://drive.google.com/file/d/1FZyrwDr2L-borgLNO3gJf05-pzp-fgCC/view?usp=drivesdk",
  },
  {
    name: "Construct bot",
    description:
      "Construct-O-Bot, eYRC 2019–20 theme by IIT Bombay, aimed to help stuents build and develop robots for post-disaster reconstruction.",
    tags: [
      {
        name: "IIT",
        color: "blue-text-gradient",
      },
      {
        name: "line follow",
        color: "green-text-gradient",
      },
      {
        name: "encoder",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Manitesla",
    live_site_link: "https://youtube.com/shorts/mp7tAY9FGQA?si=IQ6YSLUpfLhM0PLN",
  },
  {
    name: "Spider bot",
    description:
      "A Spider Bot is a multi-legged robot designed for stability and the ability to move in multiple directions, making it perfect for mini hobby projects like walking and waving hi.",
    tags: [
      {
        name: "Servo",
        color: "blue-text-gradient",
      },
      {
        name: "Nano",
        color: "green-text-gradient",
      },
      {
        name: "hobby",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
 /*{ {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
  
    name: "T",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
  {
    name: "s",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
  {
    name: "Te",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },*/
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@manikantsavadatti",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/manikant-savadatti-23215a1a1/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://github.com/Manitesla",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Manitesla",
  },
] as const;
