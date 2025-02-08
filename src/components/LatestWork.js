import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import workItems from '../data/workItems'

const LatestWork = () => {
  const router = useRouter();
  const tags = ['All', 'Web Application', 'Portfolio', 'UI'];

  const [activeTag, setActiveTag] = useState('All');

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const filteredItems = workItems.filter((item) => {
    if (activeTag === 'All') return true;
    return item.tag === activeTag;
  });

  const handleProjectItemClick = (id) => {
    router.push(`/project/${id}`);
  };

  const NoProjectsMessage = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-8 justify-center items-center"
      >
        <h3 className="text-2xl font-semibold text-gray-600 dark:text-white">
          Sorry, no projects found for this tag.
        </h3>
        <p className="text-gray-500 dark:text-gray-300">Check back later for more projects.</p>
      </motion.div>
    );
  };

  return (
    <section className="pt-24">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="font-bold text-[#ff6b6b] text-7xl mb-[64] sm:mb-[32] w-full text-center dark:text-[#ffd166] md:text-6xl xs:text-4xl md:mb-16">
          WHAT I BUILT<span className="text-[#ffd166] dark:text-[#ff6b6b]">?</span>
        </h2>

        <div className="flex flex-wrap py-4 mt-4 justify-center items-center overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-md mr-2 ${
                tag === activeTag
                  ? 'text-white bg-blue-600'
                  : 'text-gray-700 dark:text-white hover:bg-[#292524] hover:text-white dark:hover:bg-[#292524]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-3 lg:grid-cols-2 gap-5 w-full xl:pt-3 2xl:pt-3 md:grid-cols-1 md:gap-5 md:pt-3 xs:gap-5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="relative flex flex-col mb-12 overflow-hidden cursor-pointer rounded-lg border border-gray-100"
              onClick={() => handleProjectItemClick(item.id)}
              >
              <span
              class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#ff6b6b] via-[#ffd166] to-blue-600"
            ></span>
                <div className="flex-shrink-0">
                  <Image className="object-cover w-full h-48 rounded-lg" src={item.imageUrl} alt="project" />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div className="flex-1 px-2">
                    <div className="flex pt-6 space-x-1 text-sm text-gray-500 dark:text-gray-100">
                      <time dateTime="2020-03-10">{item.date}</time>
                      <span aria-hidden="true"> · </span>
                    </div>

                    <div className="block mt-2 space-y-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-50 pb-4">
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <NoProjectsMessage />
          )}
        </section>
      </div>
    </section>
  );
};

export default LatestWork;