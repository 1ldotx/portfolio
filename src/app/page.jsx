'use client';

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import { delay } from 'framer-motion';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/*<span className="text-xl">Back-End Developer</span>*/}
            <h1 className="h1 mb-6">
              Hello I'm <br />{' '}
              <span className="text-violet-500">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Nont Ekongkarn',
                    3000, // wait 1s before replacing "Mice" with "Hamsters"
                    'a Back-End Developer',
                    1000,
                    'a Game Designer',
                    1000,
                    'a Game Developer',
                    1000,
                    'and a QA Game Tester',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <div className="flex justify-center xl:justify-start">
              <p className="max-w-[500px] mb-9 text-white/80">
                BACK-END DEV TO BE. <br />
                Exploring and learning new skillset to always improve myself.
                Been in the game industry for half a decade, including my years
                studying in the university. Coding game since day one of university.
              </p>
            </div>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className=" text-violet-500 uppercase flex items-center gap-2 hover:bg-violet-600 hover:text-black hover:transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-violet-500 rounded-full flex justify-center items-center text-violet-500 text-base hover:bg-violet-500 hover:text-black hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
