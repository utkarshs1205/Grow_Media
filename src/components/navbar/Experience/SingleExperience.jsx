import React from "react";

const SingleExperience = ({ experience }) => {
  const { job, image } = experience;

  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <img
        src={image}
        alt={job}
        className="w-full max-w-xs h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <h3 className="mt-4 text-xl font-semibold">{job}</h3>
    </div>
  );
};

export default SingleExperience;