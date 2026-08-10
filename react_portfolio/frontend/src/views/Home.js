import React from 'react';

// import sections
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import SideProjects from '../components/sections/SideProjects';
import Techstack from '../components/sections/Techstack';

const Home = () => {

  return (
      <>
        <Hero />
        <Experience topDivider />
        <Techstack />
        <SideProjects topDivider />
      </>
  );
}

export default Home;