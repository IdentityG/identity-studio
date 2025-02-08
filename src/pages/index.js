import Layout from '@/components/Layout';
import Head from 'next/head';
import Typical from 'react-typical';
import Cofnet from '@/components/Cofnet';
import Bulb from '@/components/Bulb';
import Whatwedo from '@/components/Whatwedo';
import TransitionEffect from '@/components/TransitionEffect';
import { useScroll, useTransform, motion } from "framer-motion";
import Testimonial from '@/components/Testimonial';
import LatestWork from '@/components/LatestWork';
import Preview from '@/components/radar/Preview';
import PagesMetaHead from '@/components/PagesMetaHead';
import Graphics from '@/components/Graphics';
import HomeContact from '@/components/contact/HomeContact';
import LetterEG from '@/components/Text/LetterEG';


export default function Home() {
  return (
    <>
     <PagesMetaHead title="Home" />
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 xl:pt-2 2xl:pt-2">
          <div className="grid grid-cols-2 w-full xl:pt-3 2xl:pt-3 md:grid-cols-1 md:gap-5 md:pt-3 xs:gap-5">
            <div className="flex flex-col text-5xl font-bold dark:text-[#ffd166] xl:text-5xl lg:text-center lg:text-4xl lg:w-full md:text-4xl sm:text-3xl md:text-center">
              <h1>
                THE DIGITAL <br />EXPERT FOR
                <div className="text-5xl flex space-x-3 xl:text-5xl lg:text-center lg:text-4xl md:text-4xl sm:text-3xl md:pl-32 sm:pl-24 xs:pl-8">
                  <h1 className='sm:text-3xl'>YOUR</h1>
                  <strong className="bg-gradient-to-r from-[#f89a9a] to-[#ff6b6b] px-1 z-0 dark:text-[#345d9d] lg:text-center xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl">
                    <Typical
                      steps={[
                        'WEBSITE',
                        3000,
                        'DESIGN',
                        3000,
                        'GRAPHICS',
                        3000,
                        'LOGO',
                        3000,
                        
                      ]}
                      wrapper="p"
                      loop={Infinity}
                    />
                  </strong>
                </div>
                PRODUCTS
              </h1>
            </div>

            <div className="flex flex-col text-2xl text-left md:text-right sm:text-right xs:text-right font-medium sm:pt-6">
              <h1 className="md:text-sm sm:text-sm">
                Welcome to my personal portfolio! I am Egnuma Gelana, a skilled
                frontend developer and graphics designer. I specialize in
                crafting captivating online experiences using cutting-edge
                technologies.
              </h1>
              <p className="pt-7 md:text-sm sm:text-sm">
                {' '}
                With my expertise, I can transform your vision into reality,
                delivering modern and robust solutions.
              </p>
            </div>
          </div>
         
         
          <Whatwedo />
          <LatestWork />
          <Graphics />
          <Preview />
          <HomeContact />
        </Layout>

        <Cofnet />

        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Bulb />
        </div>
      </main>
    </>
  );
}
