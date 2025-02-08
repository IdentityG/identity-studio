import Image from 'next/image';
import { useRouter } from 'next/router';
import workItems from '@/data/workItems';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = workItems.find((item) => item.id === parseInt(id));

  if (!project) {
    return <div>Loading...</div>; // Or display an error message
  }

  const { title, imageUrl, date, tag, des, details, tech, link } = project;

  return (
    <div>
      <section class="py-16 md:py-24 ">
        <div class="container px-4 mx-auto">
          <div class="mx-auto mb-4 text-center md:max-w-2xl">
            <div class="inline-block px-3 py-1 mb-3 text-xs leading-5 text-blue-500 uppercase bg-blue-100 rounded-full shadow-sm dark:text-gray-400 dark:bg-gray-700">
              {tag}
            </div>
            <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-700 md:text-5xl dark:text-gray-300">
              {title}
            </h2>
            <p class="mb-4 text-lg text-gray-500 md:text-xl dark:text-gray-400">
              {des}
            </p>
            <div class="flex items-center justify-center">
              <p class="inline-block text-blue-500 dark:text-blue-300">
                {date}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-center items-center text-white">
          {Object.values(tech).map((techItem, techIndex) => (
            <h4 key={techIndex} className="bg-[#292524] px-2 py-1 rounded-lg border-blue-600">
             {techItem}
            </h4>
            ))}
          </div>

          <div className="flex gap-5 justify-center items-center pb-5">
            <Link href={link} legacyBehavior>
              <a>
                <button class="bg-[#f87171] dark:bg-[#fcd34d] hover:bg-gray-900 hover:text-white text-black border-2 border-[#6366f1] font-bold py-3 px-4 inline-flex items-center rounded-xl mt-16">
                  <svg
                    class="fill-current w-5 h-5 mr-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>View Website</span>
                </button>
              </a>
            </Link>
            <Link href={link} legacyBehavior>
              <a>
                <button class="bg-[#f87171] dark:bg-[#fcd34d] hover:bg-gray-900 hover:text-white text-black border-2 border-[#6366f1] font-bold py-3 px-4 inline-flex items-center rounded-xl mt-16">
                  <SiGithub />
                  <span>github</span>
                </button>
              </a>
            </Link>
          </div>
          <div class="max-w-6xl mx-auto mb-10 overflow-hidden rounded-lg h-[650px]">
            <Image class="object-contain w-full h-full" src={imageUrl} alt="" />
          </div>
          <div class="mx-auto md:max-w-3xl">
            <p class="pb-10 mb-8 text-lg text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 md:text-xl">
              {details}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
