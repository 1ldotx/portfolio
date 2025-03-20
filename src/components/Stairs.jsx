import { animate, delay, motion } from 'framer-motion';

// Animation variants
const stairAnimation = {
  initial: {
    top: '10=0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

// Function to calculate reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // Total number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-violet-900/40 relative"
        />
      ))}
    </>
  );
};

export default Stairs;
