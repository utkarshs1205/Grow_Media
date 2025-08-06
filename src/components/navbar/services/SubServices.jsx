const SubServices = () => {
  return (
    <div className="relative border-y-2 border-lightGrey">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-darkGrey to-black opacity-10 z-10"></div>

      {/* Image */}
      <img
        src="subSkills.jpg"
        alt="subSkills image"
        className="w-full h-full object-cover z-0"
      />
    </div>
  );
};

export default SubServices;