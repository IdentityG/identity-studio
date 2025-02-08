import Link from 'next/link';
import React, {useState} from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group view`}>
      {title}

      <span
        className={`h-[1px] bg-[#ff6b6b] inline-block absolute left-0 -bottom-0.5 
      group-hover:w-[100%] transition-[width] ease duration-300 view
      ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-[#ffd166]`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group  text-light dark:text-light my-2`} onClick={handleClick}>
      {title}

      <span
        className={`h-[1px] bg-light inline-block absolute left-0 -bottom-0.5 
      group-hover:w-[100%] transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-[#ff6b6b]`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full relative px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">
     
    <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
  </button>
    
    <div className='w-full flex justify-between items-center lg:hidden'>
    <nav>
    <CustomLink href="/" title="Home" className="mr-4 view" />
    <CustomLink href="/about" title="About" className="mx-4 view" />
    <CustomLink href="/showcase" title="Project" className="mx-4 view" />
    <CustomLink href="/contact" title="Contact" className="ml-4 view" />
  </nav>

  <nav className="flex items-center justify-center flex-wrap">
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

    <button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className={`ml-3 flex items-center justify-center rounded-full p-1
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {mode === 'dark' ? (
        <SunIcon className={'fill-dark'} />
      ) : (
        <MoonIcon className={'fill-dark'} />
      )}
    </button>
  </nav>
    </div>

      {isOpen ? 
        <motion.div
        initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
        animate={{scale: 1, opacity: 1}} 
        className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff6b6b]/90 dark:bg-[#ffd166]/90 rounded-lg backdrop-blur-md py-32'>
        <nav className='flex items-center flex-col justify-center text-2xl'>
        <CustomMobileLink href="/" title="Home" className="mr-4" toggle={handleClick}/>
        <CustomMobileLink href="/showcase" title="Project" className="mx-4" toggle={handleClick} />
        <CustomMobileLink href="/about" title="About" className="mx-4" toggle={handleClick} />
        <CustomMobileLink href="/contact" title="Contact" className="ml-4" toggle={handleClick} />
      </nav>
    
      <nav className="flex items-center justify-center flex-wrap mt-3">
       
        <motion.a
          href="https://www.linkedin.com/in/egnuma-gelana-87a5b9176"
          target={'_blank'}
          className="w-6 mx-3 sm:mx-1"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/IdentityG"
          target={'_blank'}
          className="w-6 ml-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
    
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
        >
          {mode === 'dark' ? (
            <SunIcon className={'fill-dark'} />
          ) : (
            <MoonIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
        </motion.div>
      : null
    }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
