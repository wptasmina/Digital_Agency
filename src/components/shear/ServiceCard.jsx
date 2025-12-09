
import { motion } from "framer-motion";

export default function ServiceCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: window.innerWidth >= 1024 ? -25 : -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="px-5 sm:px-6 lg:px-[30px] py-8 sm:py-10 lg:py-[50px] h-full"
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <div className="mb-6 sm:mb-8 lg:mb-10 w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] lg:w-[74px] lg:h-[74px]">
        <img
          className="w-full h-full text-primary"
          src={item?.icon}
          alt={item?.title}
        />
      </div>
      <h2
        className="text-lg sm:text-xl lg:text-[24px] font-medium mb-6 sm:mb-8 lg:mb-10"
        style={{
          color: "rgba(25, 50, 77, 1)",
        }}
      >
        {item?.title}
      </h2>
      <p
        className="text-sm sm:text-base"
        style={{
          color: "rgba(95, 117, 140, 1)",
        }}
      >
        {item?.description}
      </p>
    </motion.div>
  );
}
