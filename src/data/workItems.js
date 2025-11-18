import pro from '../../public/images/projects/afro.PNG';
import pro1 from '../../public/images/projects/ecommerce.PNG';
import pro2 from '../../public/images/projects/news.PNG';
import pro3 from '../../public/images/projects/shareme.PNG';
import pro4 from '../../public/images/projects/portfolio.PNG';
import pro5 from '../../public/images/projects/adafood.png';
import pro6 from '../../public/images/projects/mekiya.png';
import coffee from '../../public/images/projects/coffee.png';
import identityStudio from '../../public/images/projects/studios.png';
import bmElectro from '../../public/images/projects/bm.png';
import aydu from '../../public/images/projects/aydu.png';

const workItems = [
   {
    id: 1,
    tag: 'Web Application',
    title: 'landing page website',
    imageUrl: pro6,
    date: '06/20/2024',
    link: 'http://mekiyaenterprise.com/',
    des: 'Landing page website for company',
    details:
      "Project: Website Development for Mekiya Enterprise. 🌐 Client: Mekiya Enterprise 🛠️ Tools Used: Next JS, Tailwindcss, GSAP, Framer-Motion 🎯 Objective: Designed and developed a dynamic, user-friendly website to showcase Mekiya Enterprise’s services, enhance their online presence, and drive customer engagement. Key Contributions: ✅ Developed a fully responsive website using Next JS, ensuring a seamless experience across desktops, tablets, and mobile devices. ✅ Customized themes and plugins to reflect the client’s brand identity and business objectives. ✅ Implemented key features such as service pages, contact forms, and call-to-action elements to improve user interaction and lead generation. ✅ Collaborated closely with the client to understand their needs and deliver a website that aligned with their vision and goals. Outcome: 🚀 Delivered a professional, visually appealing website that strengthened Mekiya Enterprise’s online presence, improved customer engagement, and provided a scalable platform for future updates.",
    tech: {
      1: 'Next JS',
      2: 'Tailwindcss',
      3: 'GSAP',
      4: 'Framer-Motion'
    },
  },
  {
    id: 2,
    tag: 'Web Application',
    title: 'Mekiya Coffee Landing Page',
    imageUrl: coffee,
    date: '09/10/2025',
    link: 'http://mekiyacoffee.com/',
    des: 'Landing page website for Mekiya Coffee',
    details:
      "Project: Website Development for Mekiya Coffee. 🌐 Client: Mekiya Coffee ☕ Tools Used: Next JS, Tailwindcss, GSAP, Framer-Motion 🎯 Objective: Designed and developed a vibrant, user-friendly website to showcase Mekiya Coffee’s premium products, highlight their brand story, and drive customer engagement. Key Contributions: ✅ Built a fully responsive website using Next JS, ensuring a seamless experience across desktops, tablets, and mobile devices. ✅ Customized themes and animations to reflect Mekiya Coffee’s warm, inviting brand identity. ✅ Implemented key features such as product pages, an interactive menu, contact forms, and call-to-action elements to enhance user interaction and boost sales. ✅ Collaborated closely with the client to align the website with their vision of promoting high-quality coffee and exceptional customer experiences. Outcome: 🚀 Delivered a visually stunning, professional website that elevated Mekiya Coffee’s online presence, increased customer engagement, and provided a scalable platform for future growth.",
    tech: {
      1: 'Next JS',
      2: 'Tailwindcss',
      3: 'GSAP',
      4: 'Framer-Motion'
    }
},
  {
    id: 3,
    tag: 'Web Application',
    title: 'Afro Sweden Real Estate',
    date: '11/26/2023',
    imageUrl: pro,
    link: 'https://afrosweden.com/',
    des: 'Website for Afro Sweden Real Estate',
    details:
      'Creating a real estate website was an exciting and fulfilling experience. I conducted user research, designed an intuitive interface, built a responsive frontend, integrated features like property display and contact forms, and optimized the website for performance.',
    tech: {
      1: 'React',
      2: 'Tailwind CSS',
      3: 'Framer Motion',
    },
  },
  {
    id: 4,
    tag: 'Web Application',
    title: 'Share Me',
    date: '11/26/2023',
    imageUrl: pro3,
    link: 'https://sharehere-two.vercel.app/',
    des: 'Social media webbsite to share memories',
    details:
      'Share Me, the social media web app revolutionizing image sharing. Create stunning pin images with captions, categories, and titles. Share with others, receive engagement. Pin, save, and download inspiring content. Engage in meaningful interactions through comments. Manage your posts effortlessly.',
    tech: {
      1: 'React',
      2: 'Tailwind CSS',
      3: 'Framer Motion',
      4: 'Sanity',
    },
  },
  {
    id: 5,
    tag: 'Web Application',
    title: 'Nubia Ecommerce',
    imageUrl: pro1,
    date: '11/26/2023',
    link: 'https://nubia-shop.vercel.app/',
    des: 'Ecommerce website for product',
    details:
      'Welcome to my eCommerce project, a testament to my passion for creating exceptional online shopping experiences. This project showcases my expertise in building a successful eCommerce platform that offers a wide range of high-quality products to discerning customers.',
    tech: {
      1: 'React',
      2: 'CSS',
      4: 'Redux',
      3: 'Sanity',
    },
  },
  {
    id: 6,
    tag: 'UI',
    title: 'News home page',
    imageUrl: pro2,
    date: '11/26/2023',
    link: 'https://news-homepage-frontend.vercel.app/',
    des: 'News home page design from Frontend mentor',
    details:
      'Experience my latest achievement—an innovative home page design created as a Frontend Mentor challenge. This project showcases my creativity, technical skills, and ability to bring captivating user interfaces to life. With engaging visuals, responsive design, intuitive navigation, thoughtful typography, dynamic content sections, and performance optimization, my challenge entry demonstrates my expertise in creating exceptional web experiences.',
    tech: {
      1: 'HTML5',
      2: 'CSS',
      3: 'Javascript',
    },
  },
  {
    id: 7,
    tag: 'Portfolio',
    title: 'Portfolio website',
    imageUrl: pro4,
    date: '11/26/2023',
    link: 'https://adugna-dinka.vercel.app/',
    des: 'Portfolio website for Architect',
    details:
      "Welcome to the architect portfolio website, an impressive digital showcase of exceptional architectural designs created by the talented architect. This website represents a culmination of my efforts in crafting a visually stunning and user-friendly platform that highlights the architect's remarkable works.",
    tech: {
      1: 'Next JS',
      2: 'Tailwind CSS',
      3: 'Sanity',
    },
  },
  // Add more work items with different tags, titles, and image URLs
  {
    id: 8,
    tag: 'Web Application',
    title: 'landing page website',
    imageUrl: pro5,
    date: '05/14/2024',
    link: 'http://adafoodcomplex.com/',
    des: 'Landing page website for company',
    details:
      "Project: Website Development for Asa Food Complex 🌐 Client: Asa Food Complex 🛠️ Tools Used: WordPress, Elementor (or other plugins/themes if applicable), HTML/CSS, Adobe Suite (for graphics if used) 🎯Objective: Designed and developed a fully functional, visually appealing, and user-friendly website to enhance Asa Food Complexs online presence and improve customer engagement. Key Contributions: ✅ Built a responsive and modern website using WordPress, ensuring seamless navigation and optimal performance across all devices. ✅ Customized themes and plugins to align with the client’s brand identity and business goals. ✅ Integrated essential features such as menus, contact forms, and social media links to improve user interaction. ✅ Collaborated closely with the client to understand their vision and deliver a website that exceeded expectations. Outcome: 🚀 Delivered a professional website that strengthened Asa Food Complex’s digital footprint, improved user engagement, and provided a platform for future growth.",
    tech: {
      1: 'Wordpress',
      2: 'CSS',
      3: 'HTML',
    },
  },
  {
    id: 9,
    tag: 'Template / Concept',
    title: 'Identity Studios – Creative Digital Agency Template',
    imageUrl: identityStudio,
    date: '11/10/2025',
    link: 'https://identitystudios.vercel.app/',
    des: 'High-end digital agency template with premium animations',
    details:
      "A premium digital agency template I designed from scratch to push the boundaries of modern web experiences. Features bold typography, glassmorphism effects, smooth GSAP scroll animations, and cinematic page transitions. Built as a ready-to-use template for creative agencies, studios, or freelancers who want to stand out instantly.",
    tech: {
      1: 'Next.js 14',
      2: 'Tailwind CSS',
      3: 'GSAP',
      4: 'Framer Motion',
    },
  },

  {
    id: 10,
    tag: 'Template / Concept',
    title: 'B&M Electro Mechanical – Corporate Template',
    imageUrl: bmElectro,
    date: '08/10/2025',
    link: 'https://bm-pi-five.vercel.app/',
    des: 'Professional corporate template for engineering & industrial companies',
    details:
      "A sleek, trustworthy corporate template tailored for engineering, manufacturing, and B2B companies. Features smooth parallax sections, animated counters, timeline layouts, and a clean professional aesthetic — all powered by advanced GSAP timelines and Framer Motion micro-interactions. Perfect starting point for serious business websites.",
    tech: {
      1: 'Next.js 14',
      2: 'Tailwind CSS',
      3: 'GSAP',
      4: 'Framer Motion',
    },
  },

  {
    id: 11,
    tag: 'Template / Concept',
    title: 'African Youth Development Union – NGO Template',
    imageUrl: aydu,
    date: '07/25/2025',
    link: 'https://ayudc-web.vercel.app/',
    des: 'Inspiring template for NGOs, nonprofits & youth organizations',
    details:
      "A vibrant, purpose-driven template designed for nonprofits, youth organizations, and community initiatives across Africa and beyond. Includes impact sections, donation CTAs, event showcases, and emotional storytelling layouts — all brought to life with energetic animations, bold African-inspired colors, and smooth scroll effects using GSAP + Framer Motion.",
    tech: {
      1: 'Next.js 14',
      2: 'Tailwind CSS',
      3: 'GSAP',
      4: 'Framer Motion',
    },
  },
  
];

export default workItems;
