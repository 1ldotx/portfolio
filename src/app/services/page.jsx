'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Currently studying FullStack Web Dev online, eager to get out of my comfort-zone and pursue many different things and want to become a professional in the Web Development side.',
    href: 'https://github.com/1ldotx',
  },
  {
    num: '02',
    title: 'Back-End Development',
    description:
      'Currently studying FullStack Web Dev online, eager to get out of my comfort-zone and pursue many different things and want to become a professional in the Web Development side. Want to give it a go as a Back-End Developer.',
    href: 'https://github.com/1ldotx',
  },
  {
    num: '03',
    title: 'Game Design and Development',
    description:
      "My previous profession was as a Game Designer, Developer, and QA Game Tester and I've been in the game industry for half a decade, including my years studying at university",
    href: 'https://chanone3.wixsite.com/portfolio',
  },
];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center group">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {/* arrow button */}
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-purple-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-black text-xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-purple-500 transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
