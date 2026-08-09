import React from 'react';

// import sections
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Testimonial from '../components/sections/Testimonial';
import Techstack from '../components/sections/Techstack';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
      <>
        <Hero />
        <Experience topDivider />
        <Services />
        <Projects invertMobile topDivider imageFill className="illustration-section-02" />
        <Testimonial topDivider />
        <Techstack />
        <Cta split />
      </>
  );
}

export default Home;