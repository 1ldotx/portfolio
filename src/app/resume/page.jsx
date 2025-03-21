'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

import {
  SiTailwindcss,
  SiJquery,
  SiGoland,
  SiKotlin,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';

// about me data
const about = {
  title: 'About',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in nisi fuga assumenda corporis.',

  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Nont Ekongkarn',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+66 61-336-2497',
    },
    {
      fieldName: 'Web Dev/ BackEnd Experience',
      fieldValue: '1-2 Months',
    },
    {
      fieldName: 'Email',
      fieldValue: 'nappdevdotx@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Thai',
    },
    {
      fieldName: 'Based In',
      fieldValue: 'Bangkok, Thailand',
    },
    {
      fieldName: 'Fulltime Position',
      fieldValue: 'Available',
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in nisi fuga assumenda corporis.',

  items: [
    {
      company: 'MQDC Mongolias',
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
      type: 'Full',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My Education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in nisi fuga assumenda corporis.',

  items: [
    {
      institution: 'Udemy Online Course',
      degree: 'Full-Stack Web Developer',
      duration: '2025',
    },
    {
      institution: 'Thammasat University',
      major: 'Science and Technology',
      degree: 'Bachelor Degree',
      duration: '2022',
    },
    {
      institution: 'Modern International School Bangkok',
      major: 'Science Stream',
      degree: 'Highschool Diploma',
      duration: '2016',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in nisi fuga assumenda corporis.',
  skillList: [
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
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <SiKotlin />,
      name: 'kotlin',
    },
    {
      icon: <SiGoland />,
      name: 'goland',
    },
    {
      icon: <SiJquery />,
      name: 'jquery',
    },
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

          {/* Tabs Content */}
          <div className="min-h-[70v] w-full">
            {/* experiences */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            {/* dot */}
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <p>Education content goes here.</p>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <p>Skills content goes here.</p>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <p>About Me content goes here.</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
