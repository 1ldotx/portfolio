'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

import {
  SiTailwindcss,
  SiJquery,
  SiGoland,
  SiKotlin,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiUnrealengine,
  SiUnity,
} from 'react-icons/si';

// about me data
const about = {
  title: 'About Me',
  description:
    'Multitasking individual and able to work under pressure in an intense environment with a calm and mature attitude. Fast learner and passionate about programming. Ability to harmoniously connect with others, utilizing interpersonal skills.',

  info: [
    {
      fieldName: 'Name:',
      fieldValue: 'Nont Ekongkarn',
    },
    {
      fieldName: 'Web/Back-End Experience:',
      fieldValue: '2 Months',
    },
    {
      fieldName: 'Languages:',
      fieldValue: 'English, Thai',
    },
    {
      fieldName: 'Game Design/Dev Experience:',
      fieldValue: '3 Years',
    },
    {
      fieldName: 'Email:',
      fieldValue: 'nappdevdotx@gmail.com',
    },
    {
      fieldName: 'Phone No:',
      fieldValue: '+66 61-336-2497',
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'My past pofessions as a Game Designer/Developer and a QA Game Tester.',

  items: [
    {
      company: 'Magnolia Quality Development Co., Ltd.',
      position: 'Game Designer/Developer',
      duration: 'March 2024 - October 2024',
      type: 'Contract/Freelance',
    },
    {
      company: 'Chillchat Creative',
      position: 'Game QA Tester',
      duration: 'July 2023 -  January 2024',
      type: 'Fulltime',
    },
    {
      company: 'The Monk Games',
      position: 'Junior Game Designer',
      duration: 'December 2022 - February 2023',
      type: 'Fulltime',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My Education',
  description: '',

  items: [
    {
      institution: 'Udemy Online Course',
      major: 'Instructor: Dr.Angela Yu',
      degree: 'Full-Stack Web Developer',
      duration: '2025',
    },
    {
      institution: 'Thammasat University',
      major: 'Game Art Design, IDD CDT',
      degree: 'Bachelor Degree, Science and Technology',
      duration: '2019-2022',
    },
    {
      institution: 'Modern International School Bangkok',
      major: 'Science Stream',
      degree: 'Highschool Diploma',
      duration: '2008-2016',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description:
    'Here are the skills I aquired from my past pofessions and the skills I aquired from previous cources.',
  skillList: [
    {
      icon: <SiUnrealengine />,
      name: 'UE Blueprint',
    },
    {
      icon: <SiUnity />,
      name: 'unity C#',
    },
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    // {
    //   icon: <SiExpress />,
    //   name: 'express.js',
    // },
    // {
    //   icon: <FaReact />,
    //   name: 'react.js',
    // },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    // {
    //   icon: <SiTailwindcss />,
    //   name: 'tailwind.css',
    // },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    // {
    //   icon: <SiKotlin />,
    //   name: 'kotlin',
    // },
    {
      icon: <SiGoland />,
      name: 'goland',
    },
    // {
    //   icon: <SiJquery />,
    //   name: 'jquery',
    // },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Centered Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Tabs Content Wrapper */}
          <div className="relative w-full min-h-[500px]">
            {/* experiences */}
            <TabsContent
              value="experience"
              className="absolute inset-0 opacity-0 transition-opacity duration-300 data-[state=active]:opacity-100"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-violet-500">{item.duration}</span>
                        <h3 className="text-xl max-w-[280px] min-h-[30px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <h4 className="text-white/80 text-l max-w-[260px] min-h-[50px] text-center lg:text-left">
                          {item.type}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-violet-500"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent
              value="education"
              className="absolute inset-0 opacity-0 transition-opacity duration-300 data-[state=active]:opacity-100"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-violet-500">{item.duration}</span>
                        <h3 className="text-xl max-w-[590px] min-h-[30px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <h4 className="text-white/80 text-l max-w-[260px] min-h-[50px] text-center lg:text-left">
                          {item.major}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-violet-500"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent
              value="skills"
              className="absolute inset-0 opacity-0 transition-opacity duration-300 data-[state=active]:opacity-100"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-purple-500 transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize bg-[#232329] text-white rounded-2xl flex">
                              {skill.name}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value="about"
              className="absolute inset-0 opacity-0 transition-opacity duration-300 data-[state=active]:opacity-100"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[920px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-l">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
