import { motion } from "framer-motion";

export default function CircleBlob({
  top,
  bottom,
  left,
  right,
  size = "50px",
  zIndex = -50,
  centered = false,
}) {
  const positionStyles = {};

  if (top !== undefined) positionStyles.top = top;
  if (bottom !== undefined) positionStyles.bottom = bottom;
  if (left !== undefined) positionStyles.left = left;
  if (right !== undefined) positionStyles.right = right;

  if (centered && left === undefined && right === undefined) {
    positionStyles.left = "50%";
  }

  return (
    <motion.span
      className="absolute border-[1px] border-primary rounded-full z-50"
      style={{
        ...positionStyles,
        width: size,
        height: size,
        zIndex: zIndex,
        transformOrigin: "center",
      }}
      initial={{
        x: centered ? "-50%" : 0,
        y: 0,
      }}
      animate={{
        x: centered ? "-50%" : 0,
        y: [-4, 4, -4],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
}
