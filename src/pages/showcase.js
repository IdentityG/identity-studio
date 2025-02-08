import React from 'react';
import Layout from '@/components/Layout';
import LatestWork from '@/components/LatestWork';
import Graphics from '@/components/Graphics';
import TransitionEffect from '@/components/TransitionEffect';
import PagesMetaHead from '@/components/PagesMetaHead';

const Showcase = () => {


  return (
    <>
     <PagesMetaHead title="Project" />
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center ">
        <Layout className="pt-14">      
         <LatestWork />
         <Graphics />
        </Layout>
      </main>
    </>
  );
};

export default Showcase;
