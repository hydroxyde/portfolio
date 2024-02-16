import { centralcruise, lablup, wg } from "../assets/images";
import {
  car,
  contact,
  css,
  docker,
  python,
  django,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Backend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerize",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Lablup",
    icon: lablup,
    iconBg: "#accbe1",
    date: "April 2021 - July 2023",
    points: [
      "Developing and maintaining web application using Django and React.js and other related technologies.",
      "Collaborating with cross-functional teams including DevOps, product managers, and other developers to create high-quality product.",
      "Proactively resolved backend.ai tickets raised by both internal team members and international customers, ensuring a smoother development process and enhanced customer satisfaction.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Who's Good",
    icon: wg,
    iconBg: "#fbc3bc",
    date: "June 2019 - Jan 2021",
    points: [
      "Developing and maintaining web application using Laravel and other related technologies.",
      "Implemented enterprise application for ESG automated scores reports using PHP.",
      "Designed and implemented a REST API for delivering diverse data to external clients, including Hyundai Commercial, Koscom, TheBell, and Naver. Implemented Oauth 2.0 with SSL encryption to ensure robust security measures.",
      "Conducted security penetration testing on company systems and websites to enhance overall security and elevate data protection standards. This encompassed thorough analysis of domain data, network reviews (including packet sniffing), analysis of login functions, and assessment of server security.",
    ],
  },
  {
    title: "Web Developer, Intern",
    company_name: "Central Cruise",
    icon: centralcruise,
    iconBg: "#b7e4c7",
    date: "Sep 2018 - Mar 2019",
    points: [
      "Maintaining and improving not only performance but general system safety of an e-commerce website selling cruises. Adding unit testing, automated backup of code and database.",
      "Led the platform update to ensure compatibility as a Progressive Web App (PWA) platform and pushed forward the use of the website as a mobile application using Javascript.",
      "Enhanced website SEO performance by leveraging HTML5 best practices, resulting in improved search engine rankings, increased organic traffic, and higher visibility.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/hydroxyde",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/samihammami/",
  },
];

export const projects = [
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Rental App",
    description:
      "Designed and built a website for booking car rental and/or private driver services in luxury business.",
    link: "https://github.com/hydroxyde/rs_agency",
  },
];
