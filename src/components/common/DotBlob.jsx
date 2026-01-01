import { motion } from "framer-motion";

export default function DotBlob({ top, bottom, left, right }) {
  const positionStyles = {};
  if (top !== undefined) positionStyles.top = top;
  if (bottom !== undefined) positionStyles.bottom = bottom;
  if (left !== undefined) positionStyles.left = left;
  if (right !== undefined) positionStyles.right = right;

  return (
    <motion.span
      className="absolute bg-primary rounded-full"
      style={{
        ...positionStyles,
        width: "5px",
        height: "5px",
        transformOrigin: "center", // Make sure the dot scales larger or smaller from its center
      }}
      animate={{
        scale: [1, 2, 1], // 1 = 10px, 2 = 20px
      }}
      transition={{
        duration: 5, // Duration of one round
        ease: "easeInOut",
        repeat: Infinity, // Will run indefinitely
      }}
    />
  );
}
