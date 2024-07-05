import project1 from "../assets/projects/project-1a.jpg";
import project2 from "../assets/projects/project-2a.png";
import project3 from "../assets/projects/project-3a.png";
import project4 from "../assets/projects/project-4a.png";

import macsLogo from "../assets/logos/macs-logo.jpg";
import ieeeLogo from "../assets/logos/ieee-logo.jpg";
import d42Logo from "../assets/logos/d42-logo.jpg";

export const HERO_CONTENT = `I am a dedicated SWE student with a strong foundation in computer science, mathematics, and machine learning. I have a deep love for studying Operating System (OS), getting to know how things are managed and pre-programmed for us to use them.

Currently, I am focused on projects in quantum machine learning, blending theory with practical applications.

I have started my journey in front-end development with React, Next.js. I'm also learning Docker for containerization, Pandas for data manipulation, and enhancing my skills in PostgreSQL.

My goal is to leverage this diverse skill set to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const ABOUT_TEXT = "Hello! I'm Aditya, a dedicated student at Delhi Technological University (DTU) where I've consistently achieved top academic honors, including perfect SGPAs and top ranks. Beyond academics, I thrive on challenges and competition, whether it's excelling in sports like badminton or achieving top-three finishes in numerous quiz competitions across Delhi. I'm driven by a passion for excellence and innovation, which reflects in my participation in hackathons and my proactive role in mentoring through programs like the Delhi Government's Desh ke Mentor. In tech societies I am known for my curiosity, collaborative spirit, and commitment to continuous learning."

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Research Intern(Ongoing)",
    company: "Scientific Analysis Group (SAG), DRDO.",
    description: `Planning to nnovate predictive models using quantum support vector machines, improving solar irradiation accuracy by 30%, and
providing more reliable data for optimizing solar energy harvest and efficiency in sustainable energy initiatives.
 Executing simulations using Python and Qiskit.`,
    technologies: ["Python", "Qiskit", "Scikit-learn ", "Pandas"],
  },

  {
    year: "July 2024 - Present",
    role: "ML Research Intern(Starting Soon)",
    company: "Delhi Technological University",
    description: `I am excited to embark on a project focused on optimizing centrality scores in networks by strategically adding missing links. This endeavor aims to enhance the importance of nodes in positive contexts and mitigate vulnerabilities in negative scenarios across various network domains. Utilizing Python for algorithm development and deep learning frameworks like TensorFlow or PyTorch, I plan to predict missing links efficiently, avoiding exhaustive methods. This project will not only sharpen my skills in Python programming and network analysis but also demonstrate my commitment to leveraging advanced technologies for impactful solutions in network science.

`,
    technologies: ["Python", "Networkx", "Graph Theory", "Tensorflow"],
  },
  

  {
    year: "Feb 2022 - March 2023",
    role: "Data Analysis Intern",
    company: "Delhi Technological University",
    description: `Optimized a fee database for 3,000+ students, improving financial record accuracy and efficiency by 40%.
 Performed data analysis using MS Excel tools to filter, sort, and organize large datasets with 99% accuracy.`,
    technologies: ["Excel", "Pandas"],
  },
  
];

// src/constants.js
export const PROJECTS = [
  {
    title: "Hand Gesture Controlled Presentation Software",
    image: project1,
    description: "Gesture-Controlled Presentation using Computer Vision allows users to control presentations using hand gestures captured through a webcam. This system utilizes computer vision techniques to interpret hand movements, enabling intuitive navigation through slides and interactive annotations.",
    technologies: ["OpenCV", "Python", "CVZone", "Numpy"],
    github: "https://github.com/Adi30TyaDTU/Gesture-Controlled-Presentation-CV",
  },
  {
    title: "Whatsapp Chat Analyser",
    image: project2,
    description: "Developed a Chat Analyzer using Streamlit, processing 100,000+ messages with real-time stats, enhancing insights. Designed interactive dashboards with multiple features, including top users, peak activity times, and other insights from 20,000+ data points, reducing analysis time by 30%.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    github: "https://github.com/Adi30TyaDTU/streamlit-wca-app",
    deployed: "https://app-wca-app-aditya.streamlit.app/", // Add the deployed URL here
  },
  {
    title: "SnakeGame",
    image: project3,
    description: "Developed a Snake Game using HTML, CSS, and JavaScript, with 500+ tests and speed adjustment.Refined user experience by ensuring seamless cross-platform functionality on iOS, Android, and web, boosted user satisfaction scores by 30% and increased daily active users by 20%",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Adi30TyaDTU/SnakeGame",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description: "Crafted a dynamic Selection Sort algorithm in C, enriched with interactive visualizations to vividly illustrate sorting principles. Designed for real-time display of sorting processes, utilizing C programming and specialized libraries for engaging user experiences. Praised for its clarity and impact in demystifying complex algorithms through visual storytelling. Future plans involve expanding the project with diverse sorting algorithms to deepen insights into computational logic and enhance educational immersion in algorithmic thinking.",
    technologies: ["C-Language", "ANSI Codes", "Windows.h-Library"],
    github: "https://github.com/Adi30TyaDTU/Selection-Sorting-Animation",
  },
];

export const CONTACT = {
  address: "New Delhi, India ",
  phoneNo: "+91 8368728056 ",
  email: "adityapratapsingh079@gmail.com",
};
// src/constants/index.js


export const RESPONSIBILITIES = [
  {
    organization: "MACS-DTU",
    position: "Technical Head",
    description: "As the Tech Head, I oversee and lead technological initiatives and projects within the society. I am responsible for managing and coordinating technical activities, organizing workshops, and spearheading innovative projects that contribute to the society's goals. My role involves mentoring and guiding members, fostering a collaborative environment, and leveraging technology to enhance the society's impact and outreach.",
    duration: "Sept 2023 - Present",
    logo: macsLogo  // Adjust as per your actual file structure and naming
  },
  {
    organization: "IEEE-DTU",
    position: "CS Coordinator",
    description: "Recently appointed as CS Chapter Coordinator at IEEE DTU, my vision is to inspire a vibrant community of computer science enthusiasts. I aim to foster a collaborative environment where members can explore emerging technologies, participate in hands-on workshops, and engage with industry experts. By organizing innovative events and promoting a culture of continuous learning, I strive to empower students with practical skills and insights that prepare them for future challenges in the tech industry.",
    duration: "July 2024 - Present",
    logo: ieeeLogo
  },
  {
    organization: "D-42: Quiz Society",
    position: "Core Member",
    description: "As a core team member of Quiz Society D-42, I play a pivotal role in organizing and conducting quizzes that engage and challenge participants. I contribute to designing quiz formats, selecting topics, and ensuring smooth execution of events. My goal is to create an inclusive and intellectually stimulating environment where members can showcase their knowledge and passion for quizzing while fostering a sense of camaraderie among participants.",
    duration: "October 2022 - Present",
    logo: d42Logo
  }
];
