'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' },
        }}
        className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] flex items-center justify-center"
      >
        {/* Circle Motion */}
        <motion.svg
          className="absolute w-[320px] h-[320px] xl:w-[420px] xl:h-[420px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#8e51ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>

        {/* Centered Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: 'easeInOut' },
          }}
          className="absolute w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] flex justify-center items-center"
        >
          <Image
            src="/assets/photo.JPEG"
            priority
            quality={100}
            width={350}
            height={350}
            alt="profile picture"
            className="object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
