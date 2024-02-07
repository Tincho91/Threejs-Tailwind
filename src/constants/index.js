import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  sass,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  chakraui,
  modoComunicacionLogo,
  freeCodeCampLogo,
  coderHouseLogo,
  masrowStudioLogo,
  dali,
  lunanet,
  proyectnob,
  threejs,
  bootstrap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Prompt Engeneer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Chakra Ui",
    icon: chakraui,
  },
];

const experiences = [
  {
    type: "Education",
    title: "Responsive Web Design - JavaScript",
    company_name: "Free Code Camp",
    date: "Mar 2021 - Aug 2021",
    icon: freeCodeCampLogo,
    iconBg: "#383E56",
    points: [
      "My first approach to web development, earning the following certificates:",
      "-Responsive Web Design",
      "-JavaScript Algorithms and Data Structures",
    ],
  },
  {
    type: "Education",
    title: "Full Stack Developer MERN",
    company_name: "CoderHouse",
    date: "Jun 2022 - Jul 2023",
    icon: coderHouseLogo,
    iconBg: "#E6DEDD",
    points: [
      "-Web Development",
      "-JavaScript",
      "-ReactJS",
      "-BackEnd with Node, Express and MongoDB",
    ],
  },
  {
    type: "Work",
    title: "Freelance Front-End Web Developer",
    company_name: "MODO - Comunicación, Mar del Plata",
    date: "Feb 2023 - Feb 2024",
    icon: modoComunicacionLogo,
    iconBg: "#383E56",
    points: [
      "Developed front-end websites using technologies such as HTML, CSS, JavaScript, and React.",
      "Worked closely with clients to understand their needs and ensure product satisfaction.",
      "Examples of work completed available upon request.",
    ],
  },
  {
    type: "Work",
    title: "Freelance Front-End Web Developer",
    company_name: "Masrow Estudio, Mar del Plata",
    date: "Apr 2023 - Present",
    icon: masrowStudioLogo,
    iconBg: "#E6DEDD",
    points: [
      "Implemented an advanced web design project for the Newell's Old Boys football club in collaboration with Masrow Studio.",
      "Used the NextJs 13 development platform and ChakraUI for styles, optimizing the user experience and modernizing the club's digital image.",
      "Final project URL: proyect-nob.vercel.app",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I appreciate the work done so far and look forward to our future collaborations. Your dedication and skills are commendable.",
    name: "Celina Bustamante",
    designation: "Content Director",
    company: "MODO",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Thank you for your partnership and the meticulous attention you've given our project. Your focus on detail has made the process smooth and successful.",
    name: "Ignacio Rodriguez",
    designation: "Founder",
    company: "Masrow Studio",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Your communication and dedication to our ongoing website project is impressive. I appreciate your personal commitment to our needs.",
    name: "Susana Mezzadri",
    designation: "Manager",
    company: "Mezzadri Propiedades",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Luna Net",
    description:
    "Crafted with HTML, SASS, and Bootstrap, this company website is the epitome of efficiency and simplicity. It boasts a clean, user-friendly interface complemented by a well-structured navigation system. Its responsive design ensures an optimal viewing experience across a range of devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "violet-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: lunanet,
    source_code_link: "https://www.lunanet.com.ar/",
  },
  {
    name: "Newells Old Boys proyect",
    description:
    "Built as a web application utilizing the power of Next.js and React, this project showcases smooth animations and seamless transitions that work together to create a markedly enhanced user experience. It's aesthetically pleasing and functional, with styling meticulously crafted using Chakra UI, ensuring a modern and user-friendly interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: proyectnob,
    source_code_link: "https://proyect-nob.vercel.app/",
  },
  {
    name: "Dali - Thermoplastics",
    description:
      "Web application built with Next.js and React, featuring a range of dependencies including Chakra UI for styling, Framer Motion for animations, and react-scroll for scroll functionalities. It also uses react-slick and slick-carousel for carousel features.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "react-scroll",
        color: "violet-text-gradient",
      },
      {
        name: "react-slick",
        color: "yellow-text-gradient",
      },
    ],
    image: dali,
    source_code_link: "https://dalitermoplasticos.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
