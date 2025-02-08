import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Graphics = () => {
  return (
    <div className="">
      <div className="h-48 items-center justify-center">
        <h2 className="font-bold text-8xl text-[#ff6b6b] mb-[-32] w-full text-center dark:text-[#ffd166] md:text-6xl xs:text-4xl md:mb-8">
          My{' '}
          <span className="text-[#ffd166] dark:text-[#ff6b6b]">Graphics</span>{' '}
          Work
        </h2>
        <h4 className="font-semibold text-2xl mt-10 w-full text-center">
          Everything is designed. <br /> Few things are designed well.
        </h4>
      </div>
      <HorizontalScrollCarousel />
     
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-gradient-to-r from-[#ff6b6b] via-[#ffd166] to-blue-600"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default Graphics;

const cards = [
  {
    url: '/images/projects/p2.webp',
    title: 'Package',
    id: 1,
  },
  {
    url: '/images/projects/p3.webp',
    title: 'Package',
    id: 2,
  },
  {
    url: '/images/projects/p4.webp',
    title: 'Package',
    id: 3,
  },
  {
    url: '/images/projects/p7.webp',
    title: 'Package',
    id: 4,
  },
  {
    url: '/images/projects/p5.webp',
    title: 'Magazine',
    id: 5,
  },
  {
    url: '/images/projects/p6.webp',
    title: 'Instagram Post',
    id: 6,
  },
  {
    url: '/images/projects/p8.webp',
    title: 'Logo',
    id: 6,
  },{
    url: '/images/projects/p9.webp',
    title: 'Magazine',
    id: 6,
  },{
    url: '/images/projects/p10.webp',
    title: 'Magazine',
    id: 6,
  },
  {
    url: '/images/projects/p11.webp',
    title: 'Magazine',
    id: 6,
  },
  {
    url: '/images/projects/p13.jpg',
    title: 'Magazine',
    id: 6,
  },
  {
    url: '/images/projects/p14.webp',
    title: 'Magazine',
    id: 6,
  },
];
