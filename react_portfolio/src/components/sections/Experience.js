import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const mainJobs = [
  {
    company: 'GFT Technologies',
    role: 'Software Engineer — Oceanografic',
    dates: 'Jan 2026 - Present',
    description: 'Designing and developing the architecture of an assistance platform for one of the largest aquariums in Europe, providing facility information, navigation and guided tours via location, plus an AI assistant built on business documentation using a RAG (Retrieval-Augmented Generation) architecture.',
    tech: ['Angular 19', 'Kotlin + JDK 17 (Hexagonal Architecture)', 'React Native 0.81', 'RAG', 'GitHub Actions', 'GCP'],
    image: require('./../../assets/images/thumbnails/oceanografic.jpg').default
  },
  {
    company: 'GFT Technologies',
    role: 'Software Engineer — Fluidra',
    dates: 'Jul 2025 - Jan 2026',
    description: 'Designed and developed the architecture of an AI-based product avatar/assistant capable of interacting by voice and answering questions grounded in vectorized business documentation, using a RAG (Retrieval-Augmented Generation) architecture.',
    tech: ['Next.js', 'Kotlin + JDK 17', 'Python + Pipecat (voice)', 'RAG', 'Jenkins', 'AWS'],
    image: require('./../../assets/images/thumbnails/fluidra.jpg').default
  }
];

const restJobs = [
  {
    company: 'GFT Technologies',
    role: 'Software Engineer Deutsche Bank',
    description: 'Developed and evolved features for an internal financial analysis application in the banking sector, working on backend and frontend solutions within a service-oriented architecture.',
    image: require('./../../assets/images/thumbnails/deutschebank.png').default
  },
  {
    company: 'Volkswagen Group Services',
    role: 'Backend Developer UK vehicle logistics',
    description: 'Backend migration for the platform managing Volkswagen Group vehicle shipment, invoicing and registration across the UK market.',
    image: require('./../../assets/images/thumbnails/volkswagen2.jpg').default
  },
  {
    company: 'Indra',
    role: 'Backend Developer T-Mobilitat',
    description: 'Built the application server integrating Catalonia\'s public transport contactless card across every operator and top-up point.',
    image: require('./../../assets/images/thumbnails/tmobilitat.jpeg').default
  },
  {
    company: 'Indra',
    role: 'Backend Developer Lurraldebus',
    description: 'Maintained and upgraded the Basque Country public transport network\'s contactless sign-up and statistical analysis systems.',
    image: require('./../../assets/images/thumbnails/lurraldebus.jpg').default
  }
];

const Experience = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Experience',
    paragraph: '10+ years designing and building backend solutions, service-oriented architectures and CI/CD pipelines across cloud (GCP, AWS) and on-premise (Red Hat OpenShift) environments. Passionate about the evolution of Artificial Intelligence, particularly its integration with software development.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="Experience" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className="split-wrap">
            {mainJobs.map((job, index) => (
              <div className="split-item" key={job.company + job.role}>
                <div
                  className={classNames('split-item-content center-content-mobile', index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right')}
                  data-reveal-container=".split-item"
                >
                  <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                    {job.company}
                  </div>
                  <h3 className="mt-0 mb-4">
                    {job.role}
                  </h3>
                  <p className="text-sm text-color-mid mb-8">
                    {job.dates}
                  </p>
                  <p className="mb-8">
                    {job.description}
                  </p>
                  <div
                    className="mt-16 pt-16"
                    style={{
                      borderTop: '1px solid rgba(115, 239, 204, 0.2)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}
                  >
                    {job.tech.map((item) => (
                      <span
                        key={item}
                        style={{
                          display: 'inline-block',
                          padding: '6px 14px',
                          borderRadius: '999px',
                          fontSize: '12px',
                          fontWeight: 600,
                          letterSpacing: '.02em',
                          color: '#73EFCC',
                          background: 'rgba(36, 229, 175, 0.08)',
                          border: '1px solid rgba(115, 239, 204, 0.32)'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="split-item-image center-content-mobile reveal-from-bottom" data-reveal-container=".split-item">
                  <Image
                    src={job.image}
                    alt={job.role}
                    width={528}
                    height={396} />
                </div>
              </div>
            ))}
          </div>

          <div
            className="center-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '56px',
              marginTop: '80px'
            }}
          >
            {restJobs.map((job) => (
              <div className="reveal-from-bottom" key={job.company + job.role}>
                <div className="mb-16" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Image
                    src={job.image}
                    alt={job.role}
                    width={330}
                    height={248}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  {job.company}
                </div>
                <h4 className="mt-0 mb-8">
                  {job.role}
                </h4>
                <p className="m-0 text-sm">
                  {job.description}
                </p>
              </div>
            ))}
          </div>

          <div className="center-content mt-32">
            <Button tag="a" color="secondary" href="https://www.linkedin.com/in/campossrg/" target="_blank" rel="noreferrer">
              See full experience on LinkedIn
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

Experience.propTypes = propTypes;
Experience.defaultProps = defaultProps;

export default Experience;
