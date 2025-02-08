import React from 'react';

const Experiance = () => {
  return (
    <section class="items-center py-24">
      <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div class="max-w-xl mx-auto">
          <div class="text-center ">
            <div class="relative flex flex-col items-center">
              <h1 class="text-6xl font-bold leading-tight text-[#ff6b6b]  dark:text-[#ffd166]">
                {' '}
                Experience
              </h1>
              <div class="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                <div class="flex-1 h-2 bg-[#ff6b6b]"></div>
                <div class="flex-1 h-2 bg-[#ffd166]"></div>
                <div class="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
            <p class="mb-16 text-base text-center text-gray-500">
                Work History
            </p>
          </div>
        </div>
        <div class="w-full mx-auto lg:max-w-3xl">
          <div class="relative flex justify-between">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div class="flex items-center justify-center w-8 h-8 bg-[#ff6b6b] rounded-full dark:bg-[#ffd166] ">
                  <div class="w-4 h-4 bg-[#ffd166] rounded-full dark:bg-[#ff6b6b]"></div>
                </div>
              </div>
              <div class="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
            </div>
            <div>
              <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                dec 2021 - Mar 2022
              </h2>
              <div class="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                    Self-Employed Frontend Developer and Graphics Designer
                  </p>
                  <p class="text-gray-700 dark:text-gray-500 font-semibold leading-7">
                  Managed all aspects of my business and client projects.
                  Collaborated closely with clients to understand their vision and deliver tailored solutions that exceeded expectations.
                  Designed visually stunning and user-friendly websites using React, TailwindCSS, and Framer Motion.
                  Created captivating graphics, illustrations, and user interfaces to enhance the aesthetic and user experience.
                  Demonstrated an eye for detail and incorporated design principles for cohesive and visually appealing results.
                  Successfully managed multiple projects, meeting deadlines and delivering high-quality work.
                  Cultivated positive client relationships, fostering trust and earning repeat business.
                  Stayed up-to-date with the latest web technologies and trends, continuously enhancing skills.
                  Used effective communication and collaboration skills to ensure successful project outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex justify-between">
            <div class="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div class="flex items-center justify-center w-8 h-8 bg-[#ff6b6b] rounded-full dark:bg-[#ffd166]">
                  <div class="w-4 h-4 bg-[#ffd166] rounded-full dark:bg-[#ff6b6b]"></div>
                </div>
              </div>
              <div class="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
            </div>
            <div>
              <h2 class="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                Aug 2022 - Currently
              </h2>
              <div class="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                    COFNets
                  </p>
                  <p class="text-gray-700 dark:text-gray-500 font-semibold leading-7">
                    During my 1+ year experience as a frontend developer at
                    Cofnets, I served as a team lead for a real estate website
                    project. I led a team of 3 developers, using React, Tailwind
                    CSS, and Framer Motion for animations. Additionally, I
                    worked on preparing website templates, creating reusable
                    components for future projects. This experience honed my
                    frontend skills, project management abilities, and
                    collaborative problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
