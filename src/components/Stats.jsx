'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 3,
    text: 'Months of Exeperience in Full Stack',
  },
  {
    num: 3,
    text: 'Full Stack Projects Completed',
  },
  {
    num: 6,
    text: 'Years of Exeperience in Games',
  },
  {
    num: 47,
    text: 'Games Projects Completed',
  },
];

const Stats = () => {
  return (
    <section
      className="pt-4 pb-12 xl:pt-0 xl:pb-0"
      style={{ marginTop: '20px' }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-10 max-w-[180vw] mx-23 xl:max-w-none xl:gap-15 py-10">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
