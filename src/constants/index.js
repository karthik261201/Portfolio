import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const CONTENT = `I am a passionate Front End developer with a knack for crafting robust and scalable web applications. With 1 year of professional experience, I have honed my skills in variety of technologies which includes React, Redux, Angular, TailwindCSS, Firebase, Node, Express, MySQL, HTML, CSS, Javascript, TypeScript etc. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - Jul 2024",
    role: "Frontend Developer",
    company: "Bounteous",
    description: `Actively involved in Frontend development in Angular for the NomNom Core project and contributed
                  to client projects including SmoothieKing, Freddy’s, and Noodles.
                  Developed and maintained a client-facing application using Angular facilitating food ordering, 
                  spanning location selection, category browsing, product selection, cart management, and order placement.
                  Implemented bug fixes, accessibility improvements, and new features for enhanced user experience.
                  Integrated Google Analytics (GA4) for event tracking and performance insights.
                  Collaborated with cross-functional teams and followed Agile best practices.`,
    technologies: ["Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    year: "Jan 2023 - May 2023",
    role: "Intern",
    company: "Bounteous",
    description: `Built dynamic web pages using HTML, CSS, JavaScript, and Bootstrap.
                  Applied OOP principles for efficient code structure and connected backend
                  with mongoDB`,
    technologies: ["React", "Bootstrap", "MongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "Netflix-GPT",
    image: project1,
    description:
      "Built a Netflix clone using React and Tailwind CSS. Managed state using Redux and integrated GPT API for personalized movie recommendations. Implemented Firebase authentication for user login and sign-up.",
    technologies: ["React", "Tailwind CSS", "Redux", "Firebase"],
  },
  {
    title: "Food Ordering App",
    image: project2,
    description:
      "Developed a React-based food ordering app with data fetched from Swiggy API.Utilized Tailwind CSS for styling, React Hooks for state management, and Redux for cart functionality.",
    technologies: ["React", "Tailwind CSS", "Redux", "Firebase"],
  },
  {
    title: "EStore",
    image: project3,
    description:
      "Created a full-stack e-commerce site with Angular, Node.js, Express.js, and MySQL for data storage Defined backend routes with Express and managed frontend using Angular’s dependency injection and lazy loading.",
    technologies: ["Angular", "Node.js", "Express.js", "MySQL"],
  }
];

export const CONTACT = {
  address: "Kottayam, Kerala, India",
  phoneNo: "+91 8921093944",
  email: "karthiknarayanan043@gmail.com",
};
