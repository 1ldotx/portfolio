'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Analytics } from '@vercel/analytics/next';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'Forestia Concept',
    title: 'Forestia Project',
    description:
      'Created functional concept mechanics for a sales gallery in Unreal Engine 5 and integrated AI Sales Agent in The Forestias project.',
    stack: [{ name: 'UE5 Blueprint' }, { name: 'VaRest' }, { name: 'APIs' }],
    image: '/assets/forestia_project.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Primorden',
    title: 'project 2',
    description:
      'Identified over 100+ bugs in the game through rigorous testing and directly collaborated with artists, game designers and developers to resolve the issues, resulting in a significant improvement in gameplay experiences. Helped sliced art assets from Artist and handed it over to the Level Designers to place it in the game.',
    stack: [{ name: 'UE5' }, { name: 'Testing' }, { name: 'Photoshop' }],
    image: '/assets/primorden.jpg',
    live: '',
    github: '',
  },
  // {
  //   num: '03',
  //   category: 'backend',
  //   title: 'project 3',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum at accusamus eius, quas officia deleniti, omnis, amet architecto nemo cumque assumenda quae similique reiciendis impedit ipsum rerum quia repellat?',
  //   stack: [
  //     { name: 'Next.js' },
  //     { name: 'Tailwind.cee' },
  //     { name: 'Javascript' },
  //   ],
  //   image: '/',
  //   live: '',
  //   github: '',
  // },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-purple-500 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description*/}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-purple-500">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-xl group-hover:text-purple-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-purple-500 rounded-xl">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* github project button */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-xl group-hover:text-purple-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-purple-500 rounded-xl">Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-purple-700 hover:bg-purple-hover text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
      <Analytics />
    </motion.section>
  );
};

export default Work;
