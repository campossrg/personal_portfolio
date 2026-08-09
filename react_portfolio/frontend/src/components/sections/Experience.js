import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const jobs = [
  {
    company: 'GFT Technologies',
    role: 'Software Engineer — Oceanografic',
    dates: 'Jan 2026 - Present',
    description: 'Designing and developing the architecture of an assistance platform for one of the largest aquariums in Europe, providing facility information, navigation and guided tours via location, plus an AI assistant built on business documentation using a RAG (Retrieval-Augmented Generation) architecture.',
    tech: 'Angular 19 · Kotlin + JDK 17 (Hexagonal Architecture) · React Native 0.81 · RAG · GitHub Actions · GCP'
  },
  {
    company: 'GFT Technologies',
    role: 'Software Engineer — Fluidra',
    dates: 'Jul 2025 - Jan 2026',
    description: 'Designed and developed the architecture of an AI-based product avatar/assistant capable of interacting by voice and answering questions grounded in vectorized business documentation, using a RAG (Retrieval-Augmented Generation) architecture.',
    tech: 'Next.js · Kotlin + JDK 17 · Python + Pipecat (voice) · RAG · Jenkins · AWS'
  },
  {
    company: 'GFT Technologies',
    role: 'Software Engineer — Deutsche Bank',
    dates: 'Jan 2023 - Jul 2025',
    description: 'Developed and evolved features for an internal financial analysis application in the banking sector, working on backend and frontend solutions within a service-oriented architecture.',
    tech: 'React 18 · Kotlin + JDK 17 · Flyway · Jenkins · Red Hat OpenShift / Kubernetes'
  },
  {
    company: 'Volkswagen Group Services',
    role: 'Analista programador',
    dates: 'Sep 2021 - Jan 2023',
    description: 'Java software analyst and developer for the UK automotive sector, building solutions for vehicle management, distribution and invoicing for the British market.',
    tech: 'Java 8 · IBM WebSphere · Oracle Database · IBM Message Broker'
  },
  {
    company: 'Independent',
    role: 'Full-stack Developer',
    dates: 'Feb 2021 - Sep 2021',
    description: 'Built websites, landing pages and custom web applications for small businesses, and contributed to the technical and business definition of a startup application business plan.',
    tech: 'AWS · React.js'
  },
  {
    company: 'Indra',
    role: 'Desarrollador de back-end',
    dates: 'Feb 2020 - Feb 2021',
    description: 'Backend developer on the contactless card integration project for Catalonia\'s public transport network, building the central platform connecting the different transport operators.',
    tech: 'Java 8 · Oracle WebLogic · Oracle Database 12c · ActiveMQ · Jenkins · Docker'
  },
  {
    company: 'Indra',
    role: 'Analista programador',
    dates: 'Jun 2017 - Mar 2020',
    description: 'Analyst and developer for a public transport project in the Basque Country, building and maintaining applications for statistical analysis and network usage tracking.',
    tech: 'Java · Spring Framework · Visual Basic .NET · Microsoft SQL Server 2016'
  },
  {
    company: 'Ibermática',
    role: 'Técnico de sistemas',
    dates: 'Mar 2016 - Jun 2017',
    description: 'Systems administration and operations for a broad group of industrial clients, including batch process execution, server monitoring, backup management and incident troubleshooting.',
    tech: 'Systems administration · Server monitoring · Backup management · Incident management'
  },
  {
    company: 'Iniker - Cosmo Consult',
    role: 'Prácticas',
    dates: 'Nov 2009 - Feb 2010',
    description: 'Training and web application development internship.',
    tech: '.NET'
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
    paragraph: '10+ years designing and building backend solutions, service-oriented architectures and CI/CD pipelines across cloud (GCP, AWS) and on-premise (Red Hat OpenShift) environments.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="Experience" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          {jobs.map((job, index) => (
            <div
              className={classNames('mb-32', index < jobs.length - 1 && ['pb-32', 'has-bottom-divider'])}
              key={job.company + job.role}
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
              <p className="text-sm text-color-mid m-0">
                {job.tech}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

Experience.propTypes = propTypes;
Experience.defaultProps = defaultProps;

export default Experience;
