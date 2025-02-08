import { motion } from "framer-motion";
import Image from "next/image";
import bulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

const Bulb = () => {
  return (
    <div className="relative w-32 h-32 right-8 md:hidden">
      <Image
        src={bulb}
        alt="Bulb"
        className="w-full h-full rounded-full shadow-lg"
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{ boxShadow: "0 0 40px 20px rgba(255, 204, 0, 1)" }}
        animate={{
          boxShadow: "0 0 80px 40px rgba(0, 136, 255, 0.8)",
          transition: { repeat: Infinity, duration: 2, repeatType: "mirror" },
        }}
      />
    </div>
  );
};

export default Bulb;