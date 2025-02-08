import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import cof from '../../public/images/profile.jpg';
import Image from 'next/image';
import TransitionEffect from '@/components/TransitionEffect';
import Experiance from '@/components/Experiance';
import PagesMetaHead from '@/components/PagesMetaHead';

const about = () => {
  return (
    <>
      <PagesMetaHead title="About" />
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center ">
        <Layout className="pt-14">
          <div className="px-0 py-16 mx-auto sm:max-w-xl md:max-w-screen lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-20">
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 lg:grid-cols-4">
              <div className="col-span-4 flex flex-col items-center justify-center xl:col-span-5">
                <h1 className="mb-4 font-semibold text-2xl uppercase text-[#ff6b6b] dark:text-[#ffd166]">
                  About Me
                </h1>
                <p className="font-medium dark:text-gray-300">
                  - Welcome to my website! My name is Egnuma Gelana, and I am a
                  passionate and dedicated frontend developer, graphics
                  designer, and web developer. With several years of experience
                  in the industry, I have honed my skills in creating visually
                  stunning and user-friendly websites.
                </p>

                <p className="font-medium my-4 dark:text-gray-300">
                  - My journey as a web professional began with my love for
                  design and technology. I believe that a well-crafted website
                  not only looks aesthetically pleasing but also provides
                  seamless functionality and an exceptional user experience.
                  With this mindset, I strive to create digital solutions that
                  not only meet my client&apos;s needs but exceed their
                  expectations
                </p>

                <p className="font-medium my-4 dark:text-gray-300">
                  - As a graphics designer, I have a keen eye for detail and a
                  deep understanding of color theory, typography, and layout
                  design. I enjoy creating visually appealing graphics and
                  illustrations that enhance the overall aesthetic of a website
                  or project. Collaboration is at the heart of my work
                  philosophy. I believe in building strong relationships with my
                  clients, understanding their goals, and working closely with
                  them throughout the development process. By combining their
                  vision with my expertise, we can create extraordinary digital
                  experiences.
                </p>
                
              </div>

              <div
                className="col-span-4 h-max relative rounded-2xl border-2 border-solid border-dark
     bg-light p-8"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                <Image
                  src={cof}
                  alt="cofnets"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            <Experiance />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
