import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Projects = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
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

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Projects',
    paragraph: 'I had the opportunity to colaborate inside the framework of a big scope project on the development of the public transport and recently on motoring area.' + 
               ' The wide vision on those two interesting areas pushed me to reach new levels and grow personally and now I am commited to develope websites and apps that ' +
               'promote new technological tools.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="Projects" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  LURRALDEBUS
                  </div>
                <h3 className="mt-0 mb-12">
                  Public transport and contacless card website
                  </h3>
                <p className="m-0">
                Maintenance on sofware that manages the logistics and positioning of public transport.
                </p>
                <p></p>
                <p>
                Upgrading project for public transport contactless request website. The development is based on a webservice that manages the system to sign-up new
                users on the Basque Country public transport net following forms and queries.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/thumbnails/lurraldebus.jpg').default}
                  alt="Lurraldebus"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  T-MOBILITAT
                  </div>
                <h3 className="mt-0 mb-12">
                  T-Mobilitat contactless card integration
                  </h3>
                <p className="m-0">
                  T-Mobilitat is the name chosen for the integration of the contactless card that joins all the different kinds of public transports in Catalonia. The aim is to promote the use
                  of one unique card payment that can be top up on every station. The project is based on developing the application server that contains the flow for managing every
                  node where the card is being used on the system.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/thumbnails/tmobilitat.jpeg').default}
                  alt="T-Mobilitat"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  VOLKSWAGEN GROUP SERVICES
                  </div>
                <h3 className="mt-0 mb-12">
                  United Kingdom's vehicle logistics
                  </h3>
                <p className="m-0">
                Migration on software that manages the Volkswagen Group vehicles. This project covers the upgrading of the technology used on the backend that
                embrace the following business logics: shipment of vehicles from factory, invoicing, logistics and car registering on United Kingdom's lands.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/thumbnails/volkswagen2.jpg').default}
                  alt="Lurraldebus"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;

export default Projects;