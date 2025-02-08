import pro from '../../public/images/projects/afro.PNG';
import pro1 from '../../public/images/projects/ecommerce.PNG';
import pro2 from '../../public/images/projects/news.PNG';
import pro3 from '../../public/images/projects/shareme.PNG';
import pro4 from '../../public/images/projects/portfolio.PNG';
import pro5 from '../../public/images/projects/adafood.png';
import pro6 from '../../public/images/projects/mekiya.png';

const workItems = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    tag: 'Web Application',
    title: 'landing page website',
    imageUrl: pro6,
    date: '06/20/2024',
    link: 'http://mekiyaenterprise.com/',
    des: 'Landing page website for company',
    details:
      "Project: Website Development for Mekiya Enterprise. 🌐 Client: Mekiya Enterprise 🛠️ Tools Used: WordPress, Elementor (or other plugins/themes if applicable), HTML/CSS, Adobe Suite (for graphics if used) 🎯 Objective: Designed and developed a dynamic, user-friendly website to showcase Mekiya Enterprise’s services, enhance their online presence, and drive customer engagement. Key Contributions: ✅ Developed a fully responsive website using WordPress, ensuring a seamless experience across desktops, tablets, and mobile devices. ✅ Customized themes and plugins to reflect the client’s brand identity and business objectives. ✅ Implemented key features such as service pages, contact forms, and call-to-action elements to improve user interaction and lead generation. ✅ Collaborated closely with the client to understand their needs and deliver a website that aligned with their vision and goals. Outcome: 🚀 Delivered a professional, visually appealing website that strengthened Mekiya Enterprise’s online presence, improved customer engagement, and provided a scalable platform for future updates.",
    tech: {
      1: 'Wordpress',
      2: 'CSS',
      3: 'HTML',
    },
  },
];

export default workItems;
