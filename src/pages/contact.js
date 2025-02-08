import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import PagesMetaHead from '@/components/PagesMetaHead';
import Contact from '@/components/contact/Contact';

const contact = () => {
  return (
    <div>
      <PagesMetaHead title="Contact" />
      <TransitionEffect />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex lg:flex-row py-5 lg:py-10 lg:mt-5"
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default contact;
