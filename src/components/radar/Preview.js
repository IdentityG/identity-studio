import React from 'react'
import Radar from './radar'
import { IconContainer } from './IconContainer'
import { FaReact,  FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiSanity, SiJavascript, SiSpringboot, SiFlutter, SiMongodb, SiTailwindcss,  SiExpress, } from "react-icons/si";


const Preview = () => {
  return (
    <>
    <h2 className="font-bold text-8xl text-[#ff6b6b] mb-[-32] w-full text-center dark:text-[#ffd166] md:text-6xl xs:text-4xl md:mb-8 pt-16">
    Powering Your <span className="text-[#ffd166] dark:text-[#ff6b6b]">Success</span> with Cutting-Edge Technology Solutions.</h2>
      <h4 className="font-semibold text-2xl mt-10 w-full text-center">
      Leveraging the Latest Technologies. <br /> for Unmatched Performance.
      </h4>
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden">
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer 
        text="Web Development" 
        delay={0.2} 
        />
        <IconContainer
          delay={0.4}
          text="React JS"
          icon={<FaReact className=" h-8 w-8 text-slate-700 " />}
        />
        <IconContainer
          text="HTML5"
          delay={0.3}
          icon={<FaHtml5 className=" h-8 w-8 text-slate-700 " />}
        />
        <IconContainer
          text="Express"
          delay={0.3}
          icon={<SiExpress className=" h-8 w-8 text-slate-700 " />}
        />
        
      </div>
    </div>
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          text="CSS3"
          delay={0.5}
          icon={<FaCss3Alt className=" h-8 w-8 text-slate-700 " />}
        />
        <IconContainer
          text="Tailwind CSS"
          icon={
            <SiTailwindcss className=" h-8 w-8 text-slate-700 " />
          }
          delay={0.8}
        />
        <IconContainer
        text="Flutter"
        icon={
          <SiFlutter className=" h-8 w-8 text-slate-700 " />
        }
        delay={0.8}
      />
      <IconContainer
      text="Springboot"
      icon={
        <SiSpringboot className=" h-8 w-8 text-slate-700 " />
      }
      delay={0.8}
    />
    <IconContainer
          text="Mongodb"
          delay={0.3}
          icon={<SiMongodb className=" h-8 w-8 text-slate-700 " />}
        />
      </div>
    </div>
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          delay={0.6}
          text="Javascript" 
          icon={<SiJavascript className=" h-8 w-8 text-slate-700 " />}
        />
        <IconContainer
          delay={0.7}
          text="Next JS"
          icon={<SiNextdotjs className=" h-8 w-8 text-slate-700 " />}
        />
        <IconContainer
        delay={0.7}
        text="MySQL"
        icon={<SiMysql className=" h-8 w-8 text-slate-700 " />}
      />
      <IconContainer
        delay={0.7}
        text="Sanity"
        icon={<SiSanity className=" h-8 w-8 text-slate-700 " />}
      />
      </div>
    </div>

    <Radar className="absolute -bottom-12" />
    <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent text-slate-700 to-transparent" />
  </div>
  </>
  )
}

export default Preview