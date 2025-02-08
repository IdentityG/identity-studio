import Image from 'next/image';
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";


const data = [
  {
    title: 'Web Design & Development',
    text: 'My web design & development services combine creativity and functionality to craft visually stunning and user-friendly websites that leave a lasting impression. I leverage the latest web technologies to ensure seamless performance across devices, delivering an exceptional online experience for your audience.',
    tag: {
      0: 'WebDesign',
      1: 'ResponsiveDesign',
      2: 'UserExperience',
    },
  },
  {
    title: 'Graphic Design',
    text: 'My graphic design expertise brings your brand to life through captivating visuals and compelling storytelling. From logo design to print materials, I create eye-catching designs that effectively communicate your unique identity and engage your target audience.',
    tag: {
      0: 'GraphicDesign',
      1: 'Branding',
      2: 'PrintDesign',
    },
  },
  {
    title: 'Responsive Web Design',
    text: "I optimize your website for responsiveness, ensuring a flawless user experience on desktops, tablets, and smartphones - a must in today's mobile-driven world.",
    tag: {
      0: 'Responsive',
      1: 'Mobile',
      2: 'All Device',
    },
  },
  {
    title: 'Branding and Identity',
    text: "My branding and identity services help you establish a strong and memorable presence in the marketplace. I delve deep into your brand's essence to develop cohesive visual identities, including logos, brand guidelines, and strategic brand positioning that resonate with your target market.",
    tag: {
      0: 'Branding',
      1: 'IdentityDesign',
      2: 'BrandStrategy',
    },
  },
];





const Whatwedo = () => {
  
  const transition = {
    duration: 14,
    ease: "easeInOut",
  };

const ref = useRef(null);

// Track scroll progress, lies between 0 and 1.
const { scrollYProgress } = useScroll({
target: ref,
offset: ["end end", "start start"],
});

// when scroll progress reached 1, path length becomes 0.
const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

const PATH = "M0.5 0.980671L0.5 1566.02";

  return (
    <>
      <h2 className="pt-32 font-bold text-8xl text-[#ff6b6b] mb-[-32] w-full text-center dark:text-[#ffd166] md:text-6xl xs:text-4xl md:mb-8">
        WHAT I DO<span className="text-[#ffd166] dark:text-[#ff6b6b]">?</span>
      </h2>
      <h4 className="font-semibold text-2xl mt-10 w-full text-center">
        Everything is designed. <br /> Few things are designed well.
      </h4>

      <div
  className="max-w-4xl mx-auto flex flex-row space-x-10 items-start w-full my-10"
  ref={ref}
>
  <svg
    viewBox="0 0 1 1567"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 w-1 h-[1000px] sm:h-[1550px]"
  >
    <path d={PATH} stroke="url(#paint0_linear_207_38)" />
    <defs>
      <linearGradient
        id="paint0_linear_207_38"
        x1="1"
        y1="-102.823"
        x2="1"
        y2="1566.02"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3879E7" stop-opacity="0" />
        <stop offset="1" stop-color="#3879E7" />
      </linearGradient>
    </defs>
    <motion.path
      // animatng pathLength value, goes from 1 to 0
      style={{
        pathLength: useSpring(pathLengthValue, {
          stiffness: 500,
          damping: 100,
        }),
      }}
      transition={transition}
      d={PATH}
      stroke="#ff6b6b"
      strokeOpacity="1"
      strokeLinecap={"round"}
      strokeWidth="3"
    />
  </svg>
  <div className="flex flex-col w-full">
    <Content />

  </div>
</div>

    </>
  );
};

export default Whatwedo;

export const Content = () => {
  return (
    <>
    {data.map((datas, index) => (
      <div key={index} className="content w-full mb-16 ">
      <p className="text-2xl font-bold text-black dark:text-white">
        {datas.title}
      </p>
      
      <p className="text-base font-normal text-neutral-800 dark:text-neutral-200">
        {datas.text}
      </p>
     

      <div className="flex sm:flex-wrap sm:gap-4 space-x-4 w-full my-6 sm:my-3">
      {Object.values(datas.tag).map((tagItem, tagIndex) => (
        <p
          key={tagIndex}
          className='bg-[#292524] px-2 py-1 rounded-lg border-blue-600 text-white'
        >
          {tagItem}
        </p>
      ))}
      </div>
    </div>
    ))}
   
    </>
  );
};