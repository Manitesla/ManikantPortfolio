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
import project7 from "../assets/projects/project7.jpeg";
import project8 from "../assets/projects/project8.jpeg";
import project9 from "../assets/projects/project9.jpeg";
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
    sideImage: logo, // <-- Add your real image path here
  },
  {
    title: "IIT Bombay/ Quest Global Ingenium / IEEE ",
    company_name: "Eyantra Fighting Covid 19 Hackathon by IIT Bombay(National Level Winner) ,IEEE Young Engineers Entrepreneurship Program(National Level Winner),Quest Global Ingenium (National level Runner)",
    icon: tesla,
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
    sideImage: logo,
  },
  {
    title: "IIT Bombay E-Yantra / IEEE BIT / Navyantram Competition(SVVV Indore)",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "e-Yantra is an IIT Bombay initiative that promotes project-based learning in robotics and embedded systems to solve real-world problems.",
      "The IEEE BIT Mini Project Competition by IEEE Student Branch, Bangalore Institute of Technology, encourages student innovation and practical engineering applications.",
      "IDEA/MODEL Competition is a national-level contest for innovative engineering ideas and models, while Navyantram (SVVV Indore) is a platform promoting creative engineering projects and hands-on learning.",
      "Frontline healthcare workers are at high risk of infection during pandemics, causing fear and hesitation to work.",
      "This Nurse is a mini prototype robot that can be controlled remotely or work autonomously to deliver medicines and monitor patients..",
      "It includes built-in UV sterilizer lights to disinfect hospital areas.",
    ],
    sideImage: logo,
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
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
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
  /*{
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
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
