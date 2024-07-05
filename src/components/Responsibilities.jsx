import React from 'react';
import { RESPONSIBILITIES } from "../constants";
import { motion } from 'framer-motion';

const Responsibilities = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{opacity:1,y:0}}
        transition={{ duration: 1 }}
        className="text-center text-4xl my-20"
      > Positions of Responsibility</motion.h2>
      <div>
        {RESPONSIBILITIES.map((responsibility, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{opacity:1,x:0}}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={responsibility.logo}
                alt={`${responsibility.organization} Logo`}
                className="h-24 w-auto mb-4 rounded-lg border-2 border-neutral-800 p-1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{opacity:1,x:0}}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h4 className="mb-2 font-semibold">{responsibility.organization}</h4>
              <h6 className="mb-2 font-semibold">{responsibility.position}</h6>
              <p className="mb-4 text-neutral-400">{responsibility.description}</p>
              <span className="text-neutral-500">{responsibility.duration}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;
