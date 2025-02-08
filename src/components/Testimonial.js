import Image from 'next/image';
import React from 'react';
import img1 from '../../public/images/projects/portfolio-cover-image.jpg';
import img2 from '../../public/images/projects/nft-collection-website-cover-image.jpg';
import img3 from '../../public/images/projects/agency-website-cover-image.jpg';
import img from '../../public/images/profile/it.png';

const testimonial = [
  {
    id: 1,
    testimonial: ' Egnuma possesses exceptional academic talent, an inquiring mind, and strong problem-solving skills. His final year project, "IoT-based Vehicle Monitoring System," showcased clear communication and confident presentation abilities. He is an outstanding individual with immense potential in Computer Science',
    name: 'Mulgeta Getachew',
    image: img1,
    type: ' Undergraduate Coordinator and Lecturer'
  },
  {
    id: 2,
    testimonial: ' To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    name: 'Egnuma Gelana',
    image: img2,
    type: '  User of CofNets'
  },
  {
    id: 3,
    testimonial: ' To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    name: 'Egnuma Gelana',
    image: img3,
    type: '  User of CofNets'
  },
  {
    id: 4,
    testimonial: ' To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    name: 'Egnuma Gelana',
    image: img1,
    type: '  User of CofNets'
  }
]

const Testimonial = () => {
  return (
    <>
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10 sm:pt-8 md:pt-8 pt-24">
        <h1 className="font-bold text-[#ff6b6b] text-7xl mb-[64] sm:mb-[32] w-full text-center dark:text-[#ffd166] md:text-6xl xs:text-4xl md:mb-8">
          Testimonials
        </h1>
        <p className="mt-4 text-xl text-gray-800 dark:text-white">
        Hear What Our Clients Have to Say
        </p>
      </div>
    <div className="grid gap-10 sm:grid-cols-1 xs:grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
     
    {testimonial.map((item, id) => (
      <div key={id} className="bg-white dark:bg-gray-800 w-72  shadow-lg mx-auto rounded-xl p-4 sm:w-72">
      <p className="text-gray-600 dark:text-white">
        <span className="text-lg font-bold text-indigo-500">“</span>
       {item.testimonial}
        <span className="text-lg font-bold text-indigo-500">”</span>
      </p>
      <div className="flex items-center mt-4">
        <a href="#" className="relative block">
          <Image
            alt="profil"
            src={item.image}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </a>
        <div className="flex flex-col justify-between ml-2">
          <span className="text-sm font-semibold text-indigo-500">
            {item.name}
          </span>
          <span className="flex items-center text-xs dark:text-gray-400">
           {item.type}
            <Image src={img} alt="image" className="w-4 h-4 ml-2" />
          </span>
        </div>
      </div>
    </div>
  ))}
    </div>
    </>
  );
};

export default Testimonial;
