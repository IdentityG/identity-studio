import { motion } from 'framer-motion';
import Layout from './Layout';
import Image from 'next/image';
import im from '../../public/images/profile/it.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import LetterEG from './Text/LetterEG';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group view`}>
      {title}

      <span
        className={`h-[1px] bg-[#ff6b6b] block  left-0 -bottom-0.5 
        group-hover:w-[50%] transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-[50%]' : 'w-0'} dark:bg-[#ffd166]`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-4 items-center justify-between">
        <div className="container p-6 mx-auto">
          <div className="lg:flex xl:flex 2xl:flex md:flex">
            <div className="w-full -mx-6 lg:w-2/5 2xl:w-3/6 md:w-2/3">
              <div className="px-6 sm:px-2">
                <Link href="/" className="view">
                 
                  <LetterEG className="w-20 h-20 rounded-full" />
                </Link>

                <div className="flex mt-6 -mx-2 xs:-mx-0 sm:-mx-0">
                  <nav className="flex items-center justify-center flex-wrap mt-6 xs:gap-2 sm:flex-row">
                   
                    <motion.a
                      href="https://www.linkedin.com/in/egnuma-gelana-87a5b9176"
                      target={'_blank'}
                      className="w-6 mx-3 view"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <LinkedInIcon />
                    </motion.a>
                    <motion.a
                      href="https://github.com/IdentityG"
                      target={'_blank'}
                      className="w-6 ml-3 view"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <GithubIcon />
                    </motion.a>
                  </nav>
                </div>
              </div>
            </div>

            <div className="lg:mt-0 w-full pl-20 2xl:w-3/6 md:w-full">
                  <h3 className="text-dark uppercase font-bold dark:text-light">Links</h3>
                  <nav className='flex gap-5 justify-between items-center sm:flex-col sm:pr-16'>
                    <CustomLink
                      href="/"
                      title="Home"
                      className="mt-2 text-sm text-gray-700 dark:text-gray-300"
                    />
                    <CustomLink
                      href="/about"
                      title="About"
                      className="mt-2 text-sm text-gray-700 dark:text-gray-300"
                    />
                    <CustomLink
                      href="/project"
                      title="Project"
                      className="mt-2 text-sm text-gray-700 dark:text-gray-300"
                    />
                    <CustomLink
                      href="/contact"
                      title="Contact"
                      className="mt-2 text-sm text-gray-700 dark:text-gray-300"
                    />
                  </nav>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 dark:text-light py-4">
          <p>
          © Copyright 2023 Inc. All rights reserved.
          </p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;