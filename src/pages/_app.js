import React,{useEffect} from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import '@/styles/globals.css';
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import PagesMetaHead from '@/components/PagesMetaHead';


const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }) {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const Locomotivescroll = new LocomotiveScroll;
      }
    )()

  }, [])
  

  return (
    <>
     <PagesMetaHead />
      <main
        className={`${plus_jakarta_sans.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
     
      </main>
    </>
  );
}
