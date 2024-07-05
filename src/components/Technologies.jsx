import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiPython, SiStreamlit, SiPandas} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  // Define an array of objects for icons with their names and random durations
  const icons = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React", duration: 2.5 },
    { icon: <TbBrandNextjs className="text-7xl text-green-700" />, name: "Next.js", duration: 5 },
    { icon: <FaHtml5 className="text-7xl text-orange-600" />, name: "HTML5", duration: 3 },
    { icon: <FaCss3Alt className="text-7xl text-blue-600" />, name: "CSS3", duration: 4 },
    { icon: <SiJavascript className="text-7xl text-yellow-500" />, name: "JavaScript", duration: 2 },
    { icon: <SiCplusplus className="text-7xl text-blue-800" />, name: "C++", duration: 4.5 },
    { icon: <SiPython className="text-7xl text-green-500" />, name: "Python", duration: 3.5 },
    { icon: <SiStreamlit className="text-7xl text-red-500" />, name: "Streamlit", duration: 5.5 },
    { icon: <FaDocker className="text-7xl text-blue-400" />, name: "Docker", duration: 3 },
    { icon: <SiPandas className="text-7xl text-purple-600" />, name: "Pandas", duration: 4 },
    { icon: <BiLogoPostgresql className="text-7xl text-blue-600" />, name: "PostgreSQL", duration: 3.5 },
  ];

  return (
    <motion.div
    className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{ opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{ opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            variants={iconVariants(item.duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className="text-center"
          >
            <motion.div
              className="rounded-full bg-gray-800 p-4 mb-2 relative"
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
            </motion.div>
            <motion.div
              className="text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
