import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" }, 
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ABBAS ALI",
  greet: "Hello there!",
  description:
    "A MERN stack developer with a knack for building clean, efficient, and user-centered web applications. I specialize in turning innovative ideas into seamless, intuitive experiences that work effortlessly across platforms",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Grocery Store Site",
    description:
      "A complete Fullstack web Application built using MERN stack, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage1,
    liveLink: "https://quickcart-grocerystore.netlify.app",
  },
  {
    id: 2,
    name: "Chat app",
    description:
      "A real-time chat application built with React and Socket.IO, offering instant messaging and seamless communication. It also includes a theme-changing option, allowing users to customize the app's appearance for a personalized experience.",
    image: projectImage2,
    liveLink: "https://chat-app-pq0a.onrender.com",
  },
  {
    id: 3,
    name: "Crypto Price tracker",
    description:
      "A real-time cryptocurrency price tracker built with React and Tailwind CSS, fetching data from CoinGecko and allowing users to filter prices in INR, USD, and Euro.",
    image: projectImage3,
    liveLink: "https://coin-radar.netlify.app",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and Tailwind.",
    image: projectImage4,
    liveLink: "https://gleaming-queijadas-a7c9bf.netlify.app",
  },
];

export const ABOUT = [
  "I'm Abbas Ali, a passionate MERN stack developer with a keen focus on crafting high-quality web applications. I specialize in utilizing the power of MongoDB, Express.js, React.js, and Node.js to build robust and scalable digital solutions. My goal is to create seamless, efficient, and intuitive web experiences that not only meet but exceed user expectations.",

  "With a strong foundation in both front-end and back-end development, I approach every project with a problem-solving mindset, always striving for simplicity and functionality. Whether it’s designing interactive user interfaces or building powerful server-side features, I aim to create well-rounded applications that perform smoothly across all devices.",

  "I'm continuously expanding my skill set and keeping up with emerging technologies, ensuring that I bring fresh, innovative approaches to every project. I’m excited about the possibilities of web development and am always eager to take on new challenges that push my limits and broaden my expertise.",
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/AbbasAli-R",
    icon: <FaGithub fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/abbasali-r/",
    icon: <FaLinkedin fontSize={30} className="hover:opacity-80" />,
  },
];
