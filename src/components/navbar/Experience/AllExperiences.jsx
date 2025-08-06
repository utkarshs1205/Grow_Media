import React from "react";
import SingleExperience from "./SingleExperience";

import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const experiences = [
  {
    job: "Dan BRO",
    image: "/DB.jpeg",
  },
  {
    job: "Barbeque Nation",
    image: "/bbq.png",
  },
  {
    job: "Masala Basket",
    image: "/im.JPG",
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < 2 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperiences;